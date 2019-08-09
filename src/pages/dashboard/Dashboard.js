import React, { Component } from 'react';
import './Dashboard.scss';
import Loading from '../../components/loading/Loading';
import { setSearchText, setLoading } from '../../redux/actions';
import { connect } from 'react-redux';
import { getSearchValue, getLoading, getGifItems } from '../../redux/selectors';
import { PropTypes } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { setGifItems } from './../../redux/actions';
import ImageCard from '../../components/imageCard/ImageCard';
import {
    IconButton,
    InputBase,
    InputLabel,
    Input,
    InputAdornment
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Dashboard extends Component {
    componentDidMount() {
        this.apply();
    }

    apply = () => {
        this.props.setLoading(true);
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=ezgeQFp8RBCfqenZQS6nu7StZyRGvffd&q=${
                this.props.inputValue
            }&limit=25&offset=0&rating=G&lang=en`
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.props.setGifItems(data.data);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                this.props.setLoading(false);
            });
    };

    updateInputValue = event => {
        this.props.setSearchText(event.target.value);
    };

    submitApply = event => {
        event.preventDefault();
        this.apply();
    };

    render() {
        const noDataFound =
            !this.props.loading && !this.props.gifItems.length
                ? 'No data found'
                : '';
        const listItems = (
            <div className="list-items-wrapper">
                {this.props.gifItems.map(item => {
                    return (
                        <ImageCard
                            className="ImageCard"
                            key={item.id}
                            item={item}
                        />
                    );
                })}
            </div>
        );

        return (
            <div className="Dashboard">
                <Loading loading={this.props.loading} />

                <form className="search-form" onSubmit={this.submitApply}>
                    <InputLabel htmlFor="searchField">Search</InputLabel>
                    <Input
                        id="searchField"
                        value={this.props.inputValue}
                        onChange={this.updateInputValue}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton onClick={this.apply}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </form>
                
                {this.props.loading}
                {listItems}
                {noDataFound}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: getLoading(state.loadingReducer),
    gifItems: getGifItems(state.gifItemsReducer),
    inputValue: getSearchValue(state.searchTextReducer)
});

const mapDispatchToProps = {
    setLoading,
    setSearchText,
    setGifItems
};

Dashboard.propTypes = {
    loading: PropTypes.bool.isRequired,
    setLoading: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    gifItems: PropTypes.array.isRequired,
    setGifItems: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
