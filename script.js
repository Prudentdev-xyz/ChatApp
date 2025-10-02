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
    "Thanks for reaching out! I'll get back to you as soon as possible.",
    "Got your message, I'm reviewing it now and will respond shortly.",
    "Hi there! I'm currently unavailable but will reply as soon as I can.",
    "Thanks for your message. We'll be with you shortly!",
    "Appreciate you getting in touch! One of our team members will respond soon.",
    "Your message has been received, we're on it!",
    "Hey! Just a heads-up, responses may be delayed. Thanks for your patience!",
    "I'm away at the moment but I’ll circle back to you shortly.",
    "You're in the queue! A team member will assist you as soon as possible.",
    "Thanks for contacting us! We usually respond within 24 hours.",
    "Hi! We’ve received your request and are looking into it.",
    "Message received. Sit tight, we’ll be right with you!",
    "Thank you! We’re currently reviewing your message and will follow up soon.",
    "Hello! Just letting you know your message didn’t go unnoticed.",
    "We’re working on it! Expect a reply shortly.",
    "Busy helping others at the moment, but you're next!",
    "Thanks for your patience, help is on the way!",
    "Hi! We're processing your request. Hang tight!",
    "Auto-reply: We've received your message. We'll get back to you soon.",
    "Thanks for the heads-up. We'll take care of it!",
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
