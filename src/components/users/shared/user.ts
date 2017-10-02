import {Address} from './address';

export class User {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();

}

export class UserFfdv {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  password: string;
	constructor(name: string, phone: string, email: string, address: string , password: string) {
		this.name = name;
		this.email = email;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.password = password;
	}

}
