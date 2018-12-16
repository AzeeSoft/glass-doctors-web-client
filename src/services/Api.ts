import axios from 'axios';

export class Api {
    public static get instance() {
        return axios.create({
            baseURL: `http://localhost:8081`,
            headers: {
                Authorization: `bearer  `,
            },
        });
    }
}