import React, {Component} from 'react';
import './Dashboard.css';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { inputValue: '', items: [] };
	}

	apply = () => {
		fetch('https://api.giphy.com/v1/gifs/search?api_key=ezgeQFp8RBCfqenZQS6nu7StZyRGvffd&q=SEARCH_TEXT&limit=25&offset=0&rating=G&lang=en')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({
					items: data.data
				});
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				console.log('finish loading');
			});
	};

	updateInputValue = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	};

	render() {
		const listItems = this.state.items.map((item) => {
			return <img key={item.id} src={item.images.preview_gif.url} alt="picture"/>;
		});

		return (
			<div className="Dashboard">
				<div className="input-field">
					<form onSubmit={this.apply}>
						<label htmlFor="searchField">Search</label>
						<input id="searchField" type="text" value={this.state.inputValue} onChange={this.updateInputValue}/>
					</form>
				</div>

				<button onClick={this.apply}>Apply</button>

				<br/>

				{listItems}
			</div>
		);
	}
}

export default Dashboard;