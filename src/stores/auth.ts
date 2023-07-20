import { defineStore } from "pinia";
import { Auth } from "../models/auth.model";
import axios from "axios";


export type AuthType = {
	auth: Auth
}


export const useAuth = defineStore("auth", {
	state: () => ({ auth: {} } as AuthType),
	getters: {
		checkAuth: (state) => state.auth
	},
	actions:{
		changeAuth: async function (auth: Auth) {
			this.auth = auth 
		},
		fetchCheckAuth: async function () {
			const URL = `${import.meta.env.VITE_API_URL}/user/isLogin`.replace(" ","")
			const Status = await axios.get(URL, {
				withCredentials: true,
				headers: {
					"Access-Control-Allow-Origin": import.meta.env.VITE_API_URL
				},
			});
			console.log(Status.data)
			this.auth = Status.data
		}
	}

})
