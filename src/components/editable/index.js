import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const noop = () => {};

class Editable extends Component {
	constructor({onSave = noop}) {
		super();
		this.onSave = onSave;
		this.state = {
			editValue: false,
			valueChanged: false,
			value: 'Enter Notes'
		};
		this.editValue = this.editValue.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.saveValue = this.saveValue.bind(this);
		this.setValue = this.setValue.bind(this);
	}

	editValue() {
		this.setState(state => ({
			editValue: true
		}));
	}

	handleFocus(e) {
		e.target.select();
	}

	setValue(e) {
		const value = e.target.value;
		this.setState(state => ({valueChanged: true, value}));
	}
	saveValue() {
		this.setState(state => ({...state, editValue: false}), () => this.onSave(this.state.value));
	}

	handleKeyUp(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			this.saveValue();
		}
	}

	render() {
		const {editValue, valueChanged} = this.state;
		const {children} = this.props;
		const {value = ''} = {
			value: valueChanged ? this.state.value : this.props.value
		};

		return (
			<div onBlur={this.saveValue} style={{width: '300px', height: '200px'}}>
				<FormGroup controlId="FormControlsTextarea">
					{editValue ? (
						<FormControl
							componentClass="textarea"
							autoFocus
							onChange={this.setValue}
							onKeyUp={this.handleKeyUp}
							onFocus={this.handleFocus}
							placeholder={'Enter Notes'}
							value={value ? value : ''}
						/>
					) : typeof children === 'function' ? (
						children({value, onClick: this.editValue})
					) : (
						<h1 onClick={this.editValue}>
							{value ? value : 'Click Here to add notes'}
						</h1>
					)}
				</FormGroup>
			</div>
		);
	}
}

const {string, func} = PropTypes;
Editable.propTypes = {
	value: string,
	onSave: func,
	children: func
};

export default Editable;
