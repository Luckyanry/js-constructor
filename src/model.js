import image from "./assets/img.png";

const text = `Info about me you can find on his link: <a href="https://www.linkedin.com/in/andrii-kochmaruk/" target="_blank">Andrii Kochmaruk</a>`;

export const model = [
  {
    type: "title",
    value: "Site constructor on Vanilla JS",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        "text-align": "center",
        padding: "1.5rem",
      },
    },
  },
  {
    type: "text",
    value: text,
    options: {
      styles: {
        background: "linear-gradient(to left, #f2994a, #f2c94c)",
        "font-weight": "bold",
        padding: "1rem",
      },
    },
  },
  {
    type: "columns",
    value: [
      "This program is written in pure JS, without the use of libraries",
      "JavaScript is simple and interesting!",
      "JavaScript has unlimited potential.",
    ],
    options: {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        color: "#fff",
        "font-weight": "bold",
        padding: "2rem",
      },
    },
  },
  {
    type: "image",
    value: image,
    options: {
      styles: {
        display: "flex",
        "justify-content": "center",
        padding: "2rem 0",
      },
      imageStyles: {
        width: "500px",
        height: "auto",
      },
      alt: "Image description",
    },
  },
];
