import {faker} from '@faker-js/faker';

export interface Token {
	token: string;
}
export function generateFakeTokenData(): Token {
	return {
		token: faker.lorem.word()
	}
}