import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const styles = {
    transition: 'all 1s ease-out'
};

export class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            items: ['I\'m number 1', 'I\'m number 2', 'I\'m number 3'],
            itemNumber: 3
        };
    }

    onAddItem() {
        this.setState({
            itemNumber: this.state.itemNumber + 1,
            items: this.state.items.concat(['I\m number ' + (this.state.itemNumber + 1)])

        });
    }

    onDeleteItem(id) {
        const newItems = this.state.items.slice();
        newItems.splice(id, 1);
        this.setState({
            items: newItems
        });
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <li><a href="#">TRANSITIONS</a></li>
                            <li><a href="#">ANIMATIONS</a></li>
                            <li><a href="#">REACTJS + CSS TRANSITIONS</a></li>
                            <li className="active"><a href="#">REACTJS + CSS ANIMATIONS</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">
                            <a className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add Item</a>
                            <p>Click Item to Delete</p>
                            <ul className="collection">
                                <ReactCSSTransitionGroup
                                    transitionName="flip"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}>
                                    {this.state.items.map((item, i) => {
                                        return (
                                            <li key={item}
                                                className="collection-item"
                                                onClick={this.onDeleteItem.bind(this, i)}
                                                style={{cursor: 'pointer'}}>{item}</li>
                                        );
                                    })}
                                </ReactCSSTransitionGroup>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

