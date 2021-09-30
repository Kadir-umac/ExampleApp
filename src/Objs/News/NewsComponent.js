import * as React from "react";
import * as Scrivito from "scrivito";
import TopicList from "../../Components/TopicList";

Scrivito.provideComponent("News", ({ page }) => {
  console.log(page);
  return (

    <div className='container'>
      <h1>News Page</h1>
      <div className="row">
        <div className="col-12">
          <Scrivito.ImageTag
            content={page}
            attribute="titleImage"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-3 d-none d-lg-block">
          <TopicList />
        </div>

        <div className="col-lg-9 col-sm-12">
          <div>
            <Scrivito.ContentTag
              tag="p"
              className="p"
              content={page}
              attribute="text"
            />
          </div>
          <Scrivito.ContentTag
            tag="div"
            className="news"
            content={page}
            attribute="body"
          />
        </div>
      </div>
    </div>
  )
});
