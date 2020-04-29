import axios from 'axios';

const KEY = 'AIzaSyDCUc5xLHPZDnkYXgYff96FcNe7gJDdccE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        type: `video`
    }
});