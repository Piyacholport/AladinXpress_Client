import { defineStore } from "pinia";
import axios from "axios";
import { User, generateFakeData } from "../models/user.model";

export type UserType = {
	user: User
}

export const useUser = defineStore("user",{
	state: () => (
		{ user : {} } as UserType
	),
	getters: {
		getUser: (state) => state.user
	},
	actions: {
		login: async function (payload:Object){
			const URL:string = (import.meta.env.VITE_API_URL).replace(" ","") + "/user/login"
			const res = await axios.post(URL, payload,{
				withCredentials: true,
				headers: {
					"Access-Control-Allow-Origin": import.meta.env.VITE_API_URL
				}
			})
			this.user = res.data.user
			return res
		},
		logout: async function () {
			const URL:string = (import.meta.env.VITE_API_URL).replace(" ","") + "/user/logout"
			await axios.get(URL,{
				withCredentials: true,
				headers: {
					"Access-Control-Allow-Origin": import.meta.env.VITE_API_URL
				}
			})
			localStorage.clear();
		}
	}
})