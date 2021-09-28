import { groupBy } from 'lodash-es';
import * as React from 'react';
import * as Scrivito from 'scrivito';
import formatDate from '../../utils/formatDate';


const NewsPreviewList = Scrivito.connect(({ maxItems }) => {

    let newsList = Scrivito.getClass('News')
        .all()

    let news = [...newsList]

    const months = groupBy(news, (post) => {
        const publishedAt = post.get("publishDate");
        return publishedAt && formatDate(publishedAt, "mmmm yyyy");
    });
    console.log(Object.entries(months));
    return (
        <React.Fragment>
            {Object.entries(months).map(([newsItem, news]) => (
                <React.Fragment key={newsItem}>
                    <NewsPreview news={news} />
                </React.Fragment>
            ))
            }

        </React.Fragment>
    );

})



const NewsPreview = Scrivito.connect(({ news }) => (
    <div>
        {news.map((item, ind) => (
            <div className="news h3" key={ind}>
                {item.get('title')}

                <div className="news--title h5" key={ind}>
                    {item.get('publishDate').toLocaleDateString()}
                </div>
                <div className="m-2 p-2">
                    <Scrivito.LinkTag to={item} className='btn'>
                        Read
                    </Scrivito.LinkTag>
                </div>
            </div>
        ))}
    </div>

))

export default NewsPreviewList;