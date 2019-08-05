import React, { Component } from 'react';
import './Dashboard.css';
import Loading from '../../components/loading/Loading';
import { setSearchText } from '../../redux/actions';
import { connect } from 'react-redux';
import { getSearchValue } from '../../redux/selectors';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            inputValue: ''
        };
    }

    componentDidMount() {
        this.apply();
    }

    apply = () => {
        this.loading(true);
        fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=ezgeQFp8RBCfqenZQS6nu7StZyRGvffd&q=${
                this.state.inputValue
            }&limit=25&offset=0&rating=G&lang=en`
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    items: data.data
                });
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                this.loading(false);
            });
    };

    loading = isLoading => {
        this.setState({
            loading: isLoading
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
            !this.state.loading && !this.state.items.length
                ? 'No data found'
                : '';
        const listItems = this.state.items.map(item => {
            return (
                <img
                    key={item.id}
                    src={item.images.preview_gif.url}
                    alt="pictuire"
                />
            );
        });

        return (
            <div className="Dashboard">
                <Loading loading={this.state.loading} />

                <div className="input-field">
                    <form onSubmit={this.submitApply}>
                        <label htmlFor="searchField">Search</label>
                        <input
                            id="searchField"
                            type="text"
                            value={this.state.inputValue}
                            onChange={this.updateInputValue}
                        />
                    </form>
                </div>

                <button onClick={this.apply}>Apply</button>

                <br />

                {listItems}
                {noDataFound}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // TODO: remove console.log
    console.log(state);
    
    return { inputValue: getSearchValue(state) };
};

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    setSearchText
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
