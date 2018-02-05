import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';
import { getCoins, retrieveCoins, searchCoins, 
	isSearching, searching, IS_SEARCHING, RETRIEVE_COINS } from './home.reducer';
import CoinChart from './table/CoinChart';
import { RootState } from '../../reducers/';
import { ICoin } from '../portfolio/portfolio.reducer';

interface IHomeState {}
class Home extends Component<IHomeProps, IHomeState> {
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

function mapStateToProps(state: RootState) {
	return {
		isSearching: searching(state.home),
		coins: getCoins(state.home) || {}
	};
}
const mapDispatchToProps = {
	retrieveCoins,
	searchCoins,
	isSearching
};

interface IHomeProps {
	retrieveCoins: () => RETRIEVE_COINS; 
	// searchCoins: PropTypes.func.isRequired,
	isSearching: () => IS_SEARCHING; 
	coins: ICoin[]; 
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
