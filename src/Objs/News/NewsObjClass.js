import * as Scrivito from "scrivito";
import metadataAttributes from "../_metadataAttributes";

const News = Scrivito.provideObjClass("News", {
  attributes: {
    title: "string",
    body: ["widgetlist", { only: "SectionWidget" }],
    publishDate: 'date',
    ...metadataAttributes,
  },
  extractTextAttributes: ["body"],
});

export default News;
