import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import './styles/app.css';


class Gif extends React.Component {
    constructor() {
        super();
        this.state = {
            gifs: []
        };
    this.handleTermChange = this.handleTermChange.bind(this);
            
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC&limit=1`;

            request.get(url, (err, res) => {
                this.setState({ gifs: res.body.data })
                console.log(res.body.data[0]);
            });
        console.log(term);
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<Gif />, document.getElementById('app'));

