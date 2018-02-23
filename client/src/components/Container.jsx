import React, { Component } from 'react';
import Nav from './Nav';
import * as textAction from '../actions/text.js';
import { connect } from 'react-redux';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		// eslint-disable-next-line
		this.props.addText('some text');
	}

	render() {
		return (
			<div className="container">
				<Nav />	
				<p></p>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	console.log('mapDispatchToProps called');
	return {
		addText: (textToAdd) => dispatch(textAction.addText(textToAdd))
	};
};

export default connect(null, mapDispatchToProps)(Container);