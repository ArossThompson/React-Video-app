import React from 'react';
import Search from './Search';
import ytAPI from '../API/youtubeAPI.js';
import VideoList from './VideoList'

class App extends React.Component {
    state = {
        videos: []
    }
    onTermSubmit = async term => {
        const response = await ytAPI.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items
        })
    }

    render () {
        return (
            <div className="ui container">
                <Search 
                    onFormSubmit={this.onTermSubmit}
                />

                <VideoList
                    videos={this.state.videos} 
                />
            </div>      
        )
    }
}

export default App;