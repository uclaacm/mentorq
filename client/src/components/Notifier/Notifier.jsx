import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

class Notifier extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			messageInfo: {
				message: '',
				key: 0
			}
		};
		this.queue = [];
		this.processQueue = this.processQueue.bind(this);
		this.addToQueue = this.addToQueue.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentDidUpdate(prevProps) {
		this.props.trigger(this.props, prevProps, this.addToQueue);
		if (!this.state.open) {
			this.processQueue();
		}
	}

	addToQueue(message) {
		this.queue.push({ message, key: Date.now() });
		if (document.visibilityState === 'hidden') {
			new Notification(message);
		}
	}

	processQueue() {
		if (this.queue.length > 0) {
			this.setState({
				open: true,
				messageInfo: this.queue.shift()
			});
		}
	}

	handleClose(event, reason) {
		if (reason === 'clickaway') {
			return;
		}

		this.setState({ open: false });
	}

	render() {
		return <Snackbar
			key={this.state.messageInfo.key}
			anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
			open={this.state.open}
			autoHideDuration={3000}
			onClose={this.handleClose}
			onExited={this.processQueue}
			message={this.state.messageInfo.message}
		/>;
	}
}

Notifier.propTypes = {
	trigger: PropTypes.func.isRequired
};

export default Notifier;
