import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoins, retrieveCoins, searchCoins, isSearching } from './home.reducer';


class Home extends Component {
    componentDidMount() {
        this.props.retrieveCoins();
    }
    render() {
        return (
            <div>
                Homepage
            </div>
        );
    }
}

function mapStateToProps(state) {
        return {
            coins: getCoins(state) || {}
        };
}
const mapDispatchToProps = {
    retrieveCoins, searchCoins, isSearching
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
