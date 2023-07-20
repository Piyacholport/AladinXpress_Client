import { v4 as uuid} from "uuid";
import {faker} from '@faker-js/faker';

export interface User {
  address: string;
  businessDetail: string;
  businessType: string;
  createdAt: Date;
  email: string;
  emailToken: string;
  fullName: string;
  id: number;
  isConfirm: boolean;
  isOwner: boolean;
  package: string;
  packagePerDay: string;
  password: string;
  phone: string;
  roleId: number
  status: boolean
  storeName: string
  updatedAt: Date
  userImage: string
  userStatus: boolean
  username: string
}

export function generateFakeData(): User {
	return {
		address: faker.lorem.words(),
		businessDetail: faker.lorem.words(),
		businessType: faker.lorem.words(),
		createdAt: new Date,
		email: faker.lorem.words(),
		emailToken: faker.lorem.words(),
		fullName: faker.lorem.words(),
		id: Math.random(),
		isConfirm: faker.datatype.boolean(),
		isOwner: faker.datatype.boolean(),
		package: faker.lorem.words(),
		packagePerDay: faker.lorem.words(),
		password: faker.lorem.words(),
		phone: faker.lorem.words(),
		roleId: Math.random(),
		status: faker.datatype.boolean(),
		storeName: faker.lorem.words(),
		updatedAt: new Date,
		userImage: faker.lorem.words(),
		userStatus: faker.datatype.boolean(),
		username: faker.lorem.words(),
	}
}