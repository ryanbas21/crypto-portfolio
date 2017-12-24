import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoins, retrieveCoins, searchCoins, isSearching, searching } from './home.reducer';
import CoinChart from './CoinChart';

class Home extends Component {
    componentDidMount() {
        this.props.retrieveCoins();
    }
    render() {
        return (
            <div>
                {
                    !this.props.isSearching
                    ? <h2>Loading...</h2>
                    : <CoinChart
                        coins={ this.props.coins }
                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
        return {
            isSearching: searching(state),
            coins: getCoins(state) || {}
        };
}
const mapDispatchToProps = {
    retrieveCoins, searchCoins, isSearching
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
