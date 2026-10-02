# 🐾 Random Dog Image Generator

A responsive web application that generates a random dog image using the Dog CEO API.

## 📌 About

This project is part of Task 16.1, which focuses on working with public APIs using JavaScript.

The application fetches a random dog image from the Dog CEO API whenever the user clicks the **Click Me** button. The fetched image is then displayed dynamically on the webpage.

## ✨ Features

- 🐶 Generates a random dog image
- 🔄 Fetches a new image every time the button is clicked
- 🌐 Uses the Dog CEO public API
- ⚡ Uses JavaScript `async/await`
- 🛡️ Includes `try...catch` error handling
- 📱 Responsive design
- 🎨 Clean and simple user interface
- 🖼️ Dynamically displays API images

## 🔗 API Used

**Dog CEO API**

Random Dog Image Endpoint:

https://dog.ceo/api/breeds/image/random

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Dog CEO API

## 📂 Project Structure

```text
16.1-Random-Dog-Image-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. The user clicks the **Click Me** button.
2. JavaScript sends a request to the Dog CEO API using `fetch()`.
3. The API returns a JSON response containing a random dog image URL.
4. The response is converted into a JavaScript object using `response.json()`.
5. The image URL is extracted from `data.message`.
6. The image source is updated dynamically.
7. A new random dog image is displayed.

## 💻 JavaScript Concepts Used

- `async/await`
- `fetch()`
- `try...catch`
- JSON parsing
- DOM manipulation
- Event listeners
- Dynamic image rendering

## 📱 Responsive Design

The webpage is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

CSS media queries are used to adjust the layout and image size for smaller screens.

## 🚀 How to Run

1. Clone this repository:

```bash
git clone <your-repository-link>
```

2. Open the project folder.

3. Open `index.html` in your browser.

4. Click the **Click Me** button to generate a random dog image.

## 👨‍💻 Author

**Aswin S**
