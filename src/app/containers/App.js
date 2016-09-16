import React from "react";
import {connect} from "react-redux";

import {Main} from '../components/Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
               <Main/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
