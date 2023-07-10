import {partial} from 'lodash';
import request from '@/utils/request';


export const userApi = {
    getUserList: partial(request, '/api', 'get'),
};
