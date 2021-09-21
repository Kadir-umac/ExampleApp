import * as Scrivito from 'scrivito'
import buttonWidgetIcon from '../../assets/images/button_widget.svg'

Scrivito.provideEditingConfig('DisclosureWidget', {
    title: 'DisclosureWidget',  
    description: 'Button for opening an info panel ',  
    thumbnail: buttonWidgetIcon, 
    attributes: {
        labelHidden: {
            title: 'Button label( hidden )'
        },
        labelDisclosed: {
            title: 'Button label( disclosed )'
        },
    }, 
    properties: [
        'labelHidden',
        'labelDisclosed'
    ], 
})