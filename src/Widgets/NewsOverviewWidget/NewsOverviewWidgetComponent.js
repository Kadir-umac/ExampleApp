import * as Scrivito from 'scrivito';
import * as React from "react";
import NewsPreview from '../../Components/News/NewsPreview'

Scrivito.provideComponent('NewsOverviewWidget',()=>{


    return(
        <NewsPreview
        maxItems={'2'} />
    )
})