import React from 'react';
import youtube from './API/youtube';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './Video/VideoList';
import VideoDetail from './Video/VideoDetails';

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.handleTermSearch('News')
    }

    handleTermSearch = async (term) => {
        const respones = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: respones.data.items,
            selectedVideo: respones.data.items[0]
        });
    }

    handleVideoSelected = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar handleTermSearch={this.handleTermSearch} />
                We have found {this.state.videos.length} videos.
                <br />
                <br />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelected={this.handleVideoSelected} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;