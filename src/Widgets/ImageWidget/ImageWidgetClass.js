import * as Scrivito from "scrivito";

const ImageWidget = Scrivito.provideWidgetClass("ImageWidget", {
  attributes: {
    image: ["reference", { only: "Image" }],
    alignment: ["enum", { values: ["left", "center", "right"] }],
    alternativeText: "string",
    link: "link",
    animation: [
      "enum",
      {
        values: [
          "none",
          "fadeInLeft",
          "fadeInRight",
          "fadeInDown",
          "fadeInUp",
          "zoomIn",
        ],
      },
    ],
    clipShape: [
      "enum", {
        values: [
          "none",
          "smallInset",
          "largeInset",
          "smallCircle",
          "largeCircle",
          "star",
          "triangle",
          "octagon",
          "butterfly"
        ],
      }
    ]
  },
});

export default ImageWidget;
