import { defineStore } from "pinia";
import { Token , generateFakeTokenData } from "../models/token.model";

export type TokenType ={
	token: Token
}

export const useToken = defineStore("token",{
	state: () => (
		{ token : {} } as TokenType 
	),
	getters: {
		getToken: (state) => state.token
	},
	actions: {
		setToken: function (token: Token) {
			this.token = token;
		}
	}
})