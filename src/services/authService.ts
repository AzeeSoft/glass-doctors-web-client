import { Api } from './Api';
import { ApiResponseData } from '@/tools/types/api/index';

export default {
    async validateApiToken() {
        const res = await Api.instance.post<ApiResponseData>('auth/validateApiToken');
        console.log(`Validation Result: ${JSON.stringify(res.data)}`);
        return res.data;
    },

    async login(username: string, password: string) {
        const res = await Api.instance.post<ApiResponseData>('auth/login', {
            username,
            password,
            storeApiTokenInSession: true,
        });
        return res.data;
    },
};
