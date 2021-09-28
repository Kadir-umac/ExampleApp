import * as Scrivito from 'scrivito';
import * as React from "react";
import NewsPreviewList from '../../Components/News/NewsPreviewList'

Scrivito.provideComponent('NewsOverviewWidget',({widget})=>{


    return(
        <NewsPreviewList
        maxItems={widget.get("maxItems")} />
    )
})