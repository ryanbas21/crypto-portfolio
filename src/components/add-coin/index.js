import React, {Component, Fragment} from 'react';
import Modal from 'react-modal';
import ModalContent from './modal.content';

class AddCoin extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.requestCloseFn = this.requestCloseFn.bind(this);
		this.openModal = this.openModal.bind(this);
	}
	requestCloseFn() {
		this.setState(state => ({
			isOpen: false
		}));
	}
	openModal() {
		this.setState(state => ({
			isOpen: true
		}));
	}
	render() {
		return (
			<Fragment>
				<button onClick={this.openModal}>Open Modal</button>
				<Modal
					isOpen={this.state.isOpen}
					onRequestClose={this.requestCloseFn}
					contentLabel="Add Coin"
					ariaHideApp={false}
				>
					<ModalContent close={this.requestCloseFn} />
				</Modal>
			</Fragment>
		);
	}
}

export default AddCoin;
