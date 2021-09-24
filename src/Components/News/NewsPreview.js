import * as React from 'react';
import * as Scrivito from 'scrivito';


const NewsPreview = Scrivito.connect(({ maxItems }) => {

    let news = Scrivito.getClass('News').all().order('title', 'asc').take(1)


    return (
    <div>News Preview{maxItems}
        <div>{Object.entries(news).map(items => {
             return (<NewsTitle key={items[0]} items={items}/>)
             })}</div>
    </div>)
})

const NewsTitle = Scrivito.connect(({ items }) => {
    console.log(items);
    return (
        <div>Hello {items[1].get('title')}</div>
    )
})

export default NewsPreview;