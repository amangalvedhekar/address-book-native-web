export interface Info {
	page:number;
	results: number;
	seed: string;
	version: string;
}

export interface DateOfBirth {
	date: string;
	age: number;
}

export interface Id {
	name: string;
	value: string;
}

export interface Name {
	first: string;
	last: string;
	title: string;
};

export interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
};

export interface ContactInformation {
	cell: string;
	dob: DateOfBirth;
	gender: string;
	id: Id;
	name: Name;
	nat: string;
	phone: string;
	picture: Picture;
}

export interface ContactListResponse {
	info: Info;
	results: ContactInformation[];
}