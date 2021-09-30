import * as Scrivito from "scrivito";
import HeadlineWidget from "../../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../../Widgets/SectionWidget/SectionWidgetClass";
import ButtonWidget from '../../Widgets/ButtonWidget/ButtonWidgetClass'
import {
  metadataEditingConfigAttributes,
  metadataInitialContent,
  metadataPropertiesGroups,
  metadataValidations,
} from "../_metadataEditingConfig";

Scrivito.provideEditingConfig("News", {
  title: "News",
  attributes: {
    ...metadataEditingConfigAttributes,
    title: {
      title: "Title for new Page",
      description: "Limit to 55 characters.",
    },
  },
  properties: ["title","text","titleImage"],
  propertiesGroups: [...metadataPropertiesGroups],
  initialContent: {
    ...metadataInitialContent,
    body: [new SectionWidget({})],
    publishDate: () => new Date(),
    title: 'My News',
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aut, sed dolores tenetur magni repellat suscipit inventore autem! At iste repellat veritatis molestias corporis nisi pariatur. Similique nisi quas est, dolorem reiciendis maiores quia quidem laborum ea ipsa ad porro?",
  },
  validations: [...metadataValidations],
});
