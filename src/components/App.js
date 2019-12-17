import React from 'react';
import Search from './Search';
import ytAPI from '../API/youtubeAPI.js';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onTermSubmit = async term => {
        const response = await ytAPI.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    componentDidMount() {
        this.onTermSubmit('news');
    }

    render () {
        return (
            <div className="ui container">
                <Search 
                    onFormSubmit={this.onTermSubmit}
                />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail
                                video={this.state.selectedVideo}
                            />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos} 
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>      
        )
    }
}

export default App;