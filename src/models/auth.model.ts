import {faker} from '@faker-js/faker';

export interface Auth {
	status: boolean;
	id: number;
	fullName: string;
	email: string;
}
export function generateFakeAuthData(): Auth {
	return {
		status: faker.datatype.boolean(),
		id: Number(faker.random.numeric()),
		fullName: faker.random.word(),
		email: faker.random.word(),
	}
}