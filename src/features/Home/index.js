import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { getCoins, retrieveCoins, searchCoins, isSearching, searching } from './home.reducer';
import CoinChart from './CoinChart';

class Home extends Component {
	componentDidMount() {
		this.props.retrieveCoins();
	}
	render() {
		return (
			<div>
				{!this.props.isSearching ? (
					<h2>Loading...</h2>
				) : (
					<Jumbotron>
						<CoinChart coins={this.props.coins} />
					</Jumbotron>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		isSearching: searching(state.Home),
		coins: getCoins(state.Home) || {}
	};
}
const mapDispatchToProps = {
	retrieveCoins,
	searchCoins,
	isSearching
};

Home.propTypes = {
	retrieveCoins: PropTypes.func.isRequired,
	// searchCoins: PropTypes.func.isRequired,
	isSearching: PropTypes.func.isRequired,
	coins: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
