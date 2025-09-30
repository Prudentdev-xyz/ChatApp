//Make the chat messages dynamic i.e. from the input
//Simulate auto response

const messageInput = document.getElementById("message"); //DOM selection
const messageContainer = document.querySelector(".message-container"); //DOM selection

const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
}); // Date object to get time

const messages = JSON.parse(localStorage.getItem("messages") ?? "[]");

// A function
const sendMessage = () => {
    const message = messageInput.value.trim(); //Accessing input value (trim() is to remove leading spaces)

    if (message === "") return; // check if user input value is empty, then terminate the code

    const newMessage = {
        name: "Musa",
        type: "sent",
        text: message,
        time: currentTime,
    };

    messages.push(newMessage);
    localStorage.setItem("messages", JSON.stringify(messages));

    renderMessages(true);

    messageInput.value = "";

    setTimeout(() => {
        autoReply();
    }, 1000);
};

const autoReply = () => {
    const names = ["Bayo", "Bola", "James", "Doe"];
    const responses = [
        "How are you?",
        "I am good and you?",
        "Can we meet today?",
        "Yes sure? Perfect!",
    ];

    const randomName = names[randomNumber(names.length)];
    const randomResponse = responses[randomNumber(responses.length)];

    const newReply = {
        name: randomName,
        type: "received",
        text: randomResponse,
        time: currentTime,
    };

    messages.push(newReply);
    localStorage.setItem("messages", JSON.stringify(messages));

    renderMessages(true);
};

const randomNumber = (length) => {
    return Math.floor(Math.random() * length);
};

const renderMessages = (slice = false) => {
    const newMessages = slice ? messages.slice(messages.length - 1) : messages;

    newMessages.forEach((message) => {
        const newElement = document.createElement("div");

        newElement.className = `message ${message.type}`;
        newElement.innerHTML = `
        <div class="bubble">
            <p class="name">${message.name}:</p>
            <p class="text">
                ${message.text}
            </p>
            <p class="time">${message.time}</p>
        </div>
    `;

        messageContainer.appendChild(newElement);

        messageContainer.scrollTop = messageContainer.scrollHeight;
    });
};

renderMessages();

//Listening to the keypress event to check if the key pressed is Enter, then call the sendMessage() function
messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
