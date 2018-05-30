import React, { Component } from 'react';

import { Login } from '..';

class SplashPage extends Component {
	render() {
		return (
			<div className="SplashPage">
				<Login {...this.props} />
			</div>
		);
	}
}
export default SplashPage;
