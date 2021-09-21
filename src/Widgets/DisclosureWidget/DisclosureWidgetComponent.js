import * as Scrivito from 'scrivito'
import * as React from 'react'

class DisclosureWidget extends React.Component {
    constructor() {
        super();
        this.state = { isDisclosed: false}
    }

    switchState() {
        this.setState({ isDisclosed: !this.state.isDisclosed})
    }

    render() {
        const widget = this.props.widget;
        const isDisclosed = this.state.isDisclosed;
        const label = isDisclosed ?
            widget.get('labelDisclosed') || 'Here we go!':
            widget.get('labelHidden') || 'Disclose!'
        
        return(
            <div>
                <div className="text-center">
                    <span onClick={()=>this.switchState()}>
                        { label }
                    </span>
                    <div className={`panel panel-default ${isDisclosed ? '' : 'd-none'}`}>
                        <Scrivito.ContentTag className="panel-heading" content={widget} attribute='heading'/>
                        <Scrivito.ContentTag className="panel-body" content={widget} attribute='body'/>
                    </div>
                </div>
            </div>
        )
  }
}

Scrivito.provideComponent('DisclosureWidget', DisclosureWidget)