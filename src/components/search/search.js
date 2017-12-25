import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormControl, FormGroup, Button } from 'react-bootstrap';
import { getCoins } from '../../features/Home/home.reducer';
import { filter, toUpper } from 'sanctuary';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			coins: this.props.coins || {}
		};
	}
	onChange(e) {
		e.preventDefault();
		const value = toUpper(e.target.value);
		this.setState(() => ({
			coins: filter(
				val => val.name.includes(value),
				this.state.coins.length ? this.state.coins : this.props.coins
			)
		}));
	}
	render() {
		return (
			<FormGroup>
				<FormControl
					type="text"
					label="Lookup Coin"
					onSubmit={this.props.onEnter}
					onChange={this.onChange}
					placeholder="Search"
				/>
				<Button bsStyle="info" type="submit" onClick={this.props.onSubmit}>
					Search
				</Button>
			</FormGroup>
		);
	}
}

function mapStateToProps(state) {
	return {
		coins: getCoins(state.Home) || {}
	};
}
export default connect(mapStateToProps)(SearchBar);

SearchBar.propTypes = {
	onEnter: PropTypes.func.isRequired,
	coins: PropTypes.array.isRequired,
	onSubmit: PropTypes.func.isRequired
};
