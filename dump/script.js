const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const getPost = () => {
    fetch(`${baseUrl}/1`)
        .then((response) => response.json())
        .then((data) => displayResult(data));
};

const getPosts = () => {
    fetch(baseUrl)
        .then((response) => response.json())
        .then((data) => displayResult(data));
};

const addPost = () => {
    fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({
            title: "Title",
            body: "Body",
            userId: 2,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => displayResult(data));
};

const updatePost = () => {
    fetch(`${baseUrl}/10`, {
        method: "PUT",
        body: JSON.stringify({
            title: "Title",
            body: "Body",
            userId: 2,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => displayResult(data));
};

const patchPost = () => {
    fetch(`${baseUrl}/10`, {
        method: "PATCH",
        body: JSON.stringify({
            title: "Title",
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => displayResult(data));
};

const deletePost = async () => {
    const response = await fetch(`${baseUrl}dfdd/10000000`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        displayResult({
            success: false,
            message: "Failed to delete post",
        });

        return;
    }

    displayResult({
        success: true,
        message: "Post deleted successfully!",
    });
};

const displayResult = (data) => {
    result.textContent = JSON.stringify(data);
};

//Descruturing Array
//used square bracket
//the order matters
//variable names can be anything

//Desctructing Object
//used curly bracket
//the order doesn't matter
//variables names must match the individual object key

const car = {
    color: "Blue",
    brand: "Toyota",
    model: "Camry",
};

// const color = car.color;
// const brand = car.brand;
// const model = car.model;

const { model, color, brand, chasisNo = "CH1029292" } = car;

console.log(model, color, brand, chasisNo);

const fruits = ["Mango", "Orange", "Grape"];

// const mango = fruits[0];
// const orange = fruits[1];
// const grape = fruits[2];

const [mango, orange, grape, guava = "Guava"] = fruits;

console.log(orange, grape, mango, guava);
