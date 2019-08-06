import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

const propTypes = {
	loading: PropTypes.bool.isRequired
};

class Loading extends Component{
	render() {
		const loading = this.props.loading ? <div className="loading"></div> : '';

		return (
			<Fragment>
				{loading}
			</Fragment>
		);
	}
}

Loading.propTypes = propTypes;

export default Loading;