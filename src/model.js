import image from "./assets/img.png";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/blocks";

const text = `Info about me you can find on his link: <a href="https://www.linkedin.com/in/andrii-kochmaruk/" target="_blank">Andrii Kochmaruk</a>`;

export const model = [
  new TitleBlock("Site constructor on Vanilla JS", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
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
  }),
  new ColumnsBlock(
    [
      "This program is written in pure JS, without the use of libraries",
      "JavaScript is simple and interesting!",
      "JavaScript has unlimited potential.",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        color: "#fff",
        "font-weight": "bold",
        padding: "2rem",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      "font-weight": "bold",
      "text-align": "center",
      padding: "1rem",
    },
  }),
];
