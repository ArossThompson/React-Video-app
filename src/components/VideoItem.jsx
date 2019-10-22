import React from 'react';
import './videoItem.css'

const VideoItem = ({ videoData }) => {
    return (
        <div className="video-item item">
            <img className="ui image" src={videoData.snippet.thumbnails.medium.url} alt=""/>
            <div className="content">
                <div className="header">
                    {videoData.snippet.title}
                </div>
            </div>
            
        </div>
    )
}

export default VideoItem;