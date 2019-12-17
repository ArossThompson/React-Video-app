import axios from 'axios';

const KEY = "AIzaSyBTnS4_VXMgAhE6y5dpPxxioHGD1B62bE4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 10,
        key: KEY
    }
});
