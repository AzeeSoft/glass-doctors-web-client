import { Api } from './Api';

export default class UsersService {
    public static fetchUsers() {
        return Api.instance.get('users');
    }
}
