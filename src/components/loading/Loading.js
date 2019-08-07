import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';
import { CircularProgress } from '@material-ui/core';

class Loading extends Component {
    render() {
        const loading = this.props.loading ? (
            <div className="background">
                <CircularProgress />
            </div>
        ) : (
            ''
        );

        return <Fragment>{loading}</Fragment>;
    }
}

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Loading;
