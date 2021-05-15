import axiosClient from '../utils/axios-config';


export class CheffApi {
    async getfoodCategories(params = { page: 1, pageSize: 10 }) {
        try {
            const res = await axiosClient.get('category/', {
                params,
            });
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
