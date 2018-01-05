import React from 'react';
import PropTypes from 'prop-types';
import {multiply} from 'sanctuary';

class ModalContent extends React.Component {
	constructor() {
		super();
		this.state = {
			total: '',
			symbol: '',
			totalValue: NaN
		};
		this.submitCoin = this.submitCoin.bind(this);
		this.handleSymbol = this.handleSymbol.bind(this);
		this.handleTotal = this.handleTotal.bind(this);
	}
	handleSymbol(e) {
		const symbol = e.target.value;
		this.setState(state => ({
			symbol
		}));
	}
	handleTotal(e) {
		const total = e.target.value;
		this.setState({
			total
		});
	}
	totalValue(e) {
		if (this.props.price) {
			this.setState(state => ({
				totalvalue: multiply(this.props.price, this.state.totalValue)
			}));
		}
	}
	submitCoin() {
		// on submit of coin
		this.props.close();
	}
	render() {
		return (
			<div>
				<span onClick={this.props.close}>{'X'}</span>
				<label>Symbol</label>
				<input
					type="text"
					onChange={this.handleSymbol}
					value={this.props.value ? this.props.symbol : this.state.symbol}
				/>
				<label>Current Price</label>
				<input type="text" value={this.props.price ? this.props.price : ''} />
				<label>total</label>
				<input type="number" onChange={this.handleTotal} />
				<label>Total value</label>
				<div value={this.state.totalValue !== NaN ? this.state.totalValue : ''} />
				<button type="submit" onClick={this.submitCoin}>
					Add Coin
				</button>
			</div>
		);
	}
}

const {func, number, string} = PropTypes;

ModalContent.propTypes = {
	close: func.isRequired,
	symbol: string,
	value: number,
	price: number.isRequired
};

export default ModalContent;
