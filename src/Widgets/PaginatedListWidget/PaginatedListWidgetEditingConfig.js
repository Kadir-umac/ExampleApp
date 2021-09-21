import * as Scrivito from 'scrivito';
import linkListWidgetIcon from '../../assets/images/link_list_widget.svg';

Scrivito.provideEditingConfig('PaginatedListWidget', {
  title: 'Paginated List',
  description: 'Displays paginated search results',
  thumbnail: linkListWidgetIcon,

  properties: [
    'itemsCountPerPage',
    'pageRangeDisplayed',
  ],

  attributes: {
    itemsCountPerPage: {
      title: 'Items per result page',
      description: 'Default: 5',
    },

    pageRangeDisplayed: {
      title: 'Maximum number of linked result pages',
      description: 'Default: 10',
    },
  },

  initialContent: {
    itemsCountPerPage: 5,
    pageRangeDisplayed: 10,
  }
});