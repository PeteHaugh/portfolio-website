import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
});

axios.defaults.baseURL = 'http://localhost:5000';

const start_game = async () => {
    try {
        const response = await axios.get('/start');
        return response.data;
    } catch (error) {
        // handle error
        console.log(error);
    }
}

export const make_move = async (col) => {
    let response;

    try {
        response = await axios.get(`/move/${col}`);
    } catch (error) {
        // handle error
        console.log(error);
    }
    return response.data
    
}