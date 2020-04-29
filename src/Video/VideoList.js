import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, handleVideoSelected}) => {
    const videoResult = videos.map((video) =>{
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelected={handleVideoSelected} />
    })

    return (
        <div className="ui relaxed divided list">{videoResult}</div>
        
    ) 
}

export default VideoList;