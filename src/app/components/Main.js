import React from "react";

export class Main extends React.Component{
    onSeeMore() {

    }

    onDiscard() {

    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <li className="active"><a href="#">TRANSITIONS</a></li>
                            <li><a href="#">ANIMATIONS</a></li>
                            <li><a href="#">JS ANIMATIONS</a></li>
                            <li><a href="#">REACTJS + CSS ANIMATIONS</a></li>
                            <li><a href="#">REACTJS + JS ANIMATIONS</a></li>
                            <li><a href="#">ROUTING TRANSITIONS</a></li>
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
                            <div className="card deep-purple z-depth-2">
                                <div className="card-content white-text">
                                    <span className="card-title">Awesome Animations!</span>
                                    <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
                                </div>
                                <div className="card-action">
                                    <a onClick={this.onSeeMore} style={{cursor: 'pointer'}}>SEE MORE</a>
                                    <a onClick={this.onDiscard} style={{cursor: 'pointer'}}>DISCARD</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

