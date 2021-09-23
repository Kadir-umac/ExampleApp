import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("MyTable", {
  title: "My Table",
  attributes:{
    row:{
      title: 'Type here the Row number ...',
      description: 'With Row number you can change Rows'
    },
    column:{
      title: 'Type here the Column number ...',
      description: 'With column number you can change columns'
    }
  },
  initialContent: {
    headline: "Lorem Ipsum",
    row: 2,
    column: 1
  },
  properties:[
    'row',
    'column',
    'headline'
  ]
});
