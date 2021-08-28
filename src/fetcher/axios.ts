import axios, {AxiosResponse} from "axios";

const addressBookAxios = axios.create({
	baseURL: 'https://randomuser.me/api'
});
