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
        <div className="news">
            <div className="container">
                <div className="row d-flex justify-content-around flex-wrap">
                    {news.map((item, ind) => (
                        <div  key={ind}>
                            <div>
                                {item.get('title')}
                            </div>

                            <div className="m-2 p-2">
                                <Scrivito.LinkTag to={item} className='btn'>
                                    Read
                                </Scrivito.LinkTag>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
))

export default NewsPreviewList;