import Axios from 'axios';

const API_KEY = 'EqIxKd2fBUMkrPCXatcNNyv5dZ8v10vEvRhtmRXuWO0';

const ImageAPI = async (query) => {
    const response = await Axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=20`,
        {
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        }
    );
    return response.data.results;
}

export default ImageAPI;