import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'
});

axios.defaults.baseURL = 'http://localhost:5000';

export const start_game = async () => {
    try {
        const response = await axios.get('/start');
        // handle success
        console.log(response);
        return response
    } catch (error) {
        // handle error
        console.log(error);
    }
}

export const make_move = async (col) => {
    try {
        const response = await axios.get(`/move/${col}`);
        // handle success
        console.log(response);
        return response
    } catch (error) {
        // handle error
        console.log(error);
    }
}