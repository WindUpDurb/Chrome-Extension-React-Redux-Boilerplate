"use strict";

import React, {PropTypes} from 'react';
import {connect} from "react-redux";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.addToClicks = this.addToClicks.bind(this);
    }

    addToClicks () {
        this.props.dispatch({
            type: "ADD_TO_CLICKER"
        });
    };

    render() {
        let clicks;
        if (this.props.clicks) clicks = this.props.clicks;
        return (
            <div>
                stuff Stuff, more Stuff: {clicks}
                <br/>
                <button onClick={this.addToClicks}>Click</button>
            </div>
        );
    }
}

App.propTypes = {
    clicks: PropTypes.number,
    initialActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        clicks: state.clickTotal
    };
}

export default connect(mapStateToProps)(App);