import * as React from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';

const noop = () => {};
interface Children {
  readonly value: string,
  readonly onClick: (n?: string) => JSX.Element | void; 
}
interface IEditableProps  {
	readonly value: string,
	readonly onSave: (n?: string) => any;
	readonly children: (n: Children) => JSX.Element | void; 
};

interface IEditableState {
	readonly editValue: boolean;
	readonly valueChanged: boolean;
	readonly value: string;
}
class Editable extends React.Component<IEditableProps, IEditableState> {
	onSave: (n: string) => void | string;
	constructor(props: IEditableProps) {
		super(props);
		this.onSave = props.onSave || noop;
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

	editValue(): void {
		this.setState(state => ({
			editValue: true
		}));
	}

	handleFocus(e: React.MouseEventHandler<void>): void {
		e.currentTarget.select();
	}

	setValue(e: React.MouseEventHandler<string>): void {
		const value = e.currentTarget.value;
		this.setState(state => ({valueChanged: true, value}));
	}
	saveValue(): void {
		this.setState(state => ({...state, editValue: false}), () => this.onSave(this.state.value));
	}

	handleKeyUp(e: React.KeyboardEvent<string>): void {
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


export default Editable;
