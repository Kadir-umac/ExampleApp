import * as React from "react";
import * as Scrivito from "scrivito";
import TopicList from "../../Components/TopicList";

import "./News.scss";

Scrivito.provideComponent("News", ({ page }) => (
  <div className='news-container container'>
    <h1>News Page</h1>
    <div className="row">
      <div className="col-3 d-none d-lg-block">
        <TopicList />
      </div>
      <div className="col-lg-9 col-sm-12">
        <Scrivito.ContentTag
          tag="div"
          className="news"
          content={page}
          attribute="body"
        />
      </div>
    </div>
  </div>
));
