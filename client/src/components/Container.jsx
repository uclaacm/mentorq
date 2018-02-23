import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import * as textAction from '../actions/text.js';
import { connect } from 'react-redux';

class Container extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.props.addText('some text');
	}

	render() {
		return (
			<div className="container">
				<Nav />	
			</div>
		);
	}
}

Container.propTypes = {
	addText: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
	return {
		addText: (textToAdd) => dispatch(textAction.addText(textToAdd))
	};
};

export default connect(null, mapDispatchToProps)(Container);