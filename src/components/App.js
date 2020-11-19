import React, { useState, useEffect } from 'react';
import Search from './Search';
import ytAPI from '../API/youtubeAPI.js';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  const onTermSubmit = async (term) => {
      const response = await ytAPI.get('/search', {
          params: {
              q: term
          }
      })

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
  }

  useEffect(() => {
    onTermSubmit('news');
  }, [])

  return (
    <div className="ui container">
      <Search 
        onFormSubmit={onTermSubmit}
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail
                video={selectedVideo}
            />
          </div>
          <div className="five wide column">
            <VideoList
                videos={videos} 
                onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>      
  )
}


export default App;