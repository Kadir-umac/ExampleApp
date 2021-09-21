import * as Scrivito from 'scrivito';
import * as React from 'react';
import Pagination from 'react-js-pagination'

class PaginatedListWidget extends React.Component {
  constructor(){
    super();

    this.state = { activePage: 1 }
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber})
    Scrivito.navigateTo(Scrivito.currentPage, { hash: 'item-list'})
  }

  render() {

    const itemCountPerPage = this.props.widget.get('itemsCountPerPage');
    const pageRangeDisplayed = this.props.widget.get('pageRangeDisplayed');

    const query = Scrivito.getClass('Page').all().order('title','desc').offset( (this.state.activePage - 1) * pageRangeDisplayed )
    const totalItemsCount = query.count()
   

    if (totalItemsCount === 0) {
      return <h5>No items found</h5>
    }

    const items = query.take(itemCountPerPage)
    
    return(
      <div>
        <div className="result-content">
          <p className="strong"> Exacty {totalItemsCount} items</p>
        </div>
        <div id="item-list">
          { items.map((item)=>{
            return(
              <div className="result-item" key={ item.id() }>
                <div className="result-content">
                    <p>
                      <Scrivito.LinkTag className="h3" to={item}>
                        { item.get('title') || 'Untitled'}
                      </Scrivito.LinkTag>
                      <br/>
                      <Scrivito.LinkTag to={item}>
                        { Scrivito.urlFor(item)}
                      </Scrivito.LinkTag>
                    </p>
                    <p>{ item.get('metaDataDescription') || 'No Description'}</p>
                </div>
              </div>
            )
          })}
        </div>

        <Pagination 
         activePage={ this.state.activePage }
         itemCountPerPage={ itemCountPerPage }
         totalItemsCount={ totalItemsCount }
         pageRangeDisplayed={ pageRangeDisplayed }
         activeClass='active'
         onChange={ this.handlePageChange }
         />

      </div>
    )
  }
}

Scrivito.provideComponent('PaginatedListWidget', PaginatedListWidget)