import { Api } from './Api';
import { ApiResponseData } from '@/tools/types/api';

export default {
    async fetchUsers() {
        return Api.instance.get<ApiResponseData>('users');
    },
};
