import React from 'react';
import {connect} from 'react-redux';
import {FormControl, FormGroup, Button} from 'react-bootstrap';
import {getCoins} from '../../features/Home/home.reducer';
import {filter, toUpper} from 'sanctuary';
import { ICoin } from '../portfolio/portfolio.reducer';
import { RootState } from '../../reducers/';

interface ISearchbarProps extends MappedProps {
	onEnter: () => void;
	getCoins: () => void;
	onSubmit: () =>  void;
}
interface ISearchbarState {
	coins: ICoin[];
}
class SearchBar extends React.Component<ISearchbarProps, ISearchbarState> {
	constructor(props: ISearchbarProps) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			coins: this.props.coins || []
		};
	}
	onChange(e: React.KeyboardEvent<string>): void {
		e.preventDefault();
		const value = toUpper((e.target as HTMLInputElement).value);
		this.setState(() => ({
			coins: filter(
				(val) => val.name.includes(value),
				this.state.coins.length ? this.state.coins : this.props.coins
			)
		}));
	}
	render(): JSX.Element {
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

interface MappedProps {
	coins: string[]
}
function mapStateToProps(state: RootState): MappedProps {
	return {
		coins: getCoins(state.home)
	};
}
export default connect(mapStateToProps)(SearchBar);


