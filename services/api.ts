
const SERVER_URL = process.env.NEXT_PUBLIC_API_URL;

export type CurrentSong = {
	state: string;
	name: string;
	artistName: string;
	imageUrl: string;
}

export type Creation = {
	name: string;
	description: string;
	link: string;
	type: string;
	img: string;
}


class ApiClass {
	async getCurrentSong(): Promise<CurrentSong> {
		const res = await fetch(`${SERVER_URL}/spotify/current`)
		const data = await res.json();
		return data;
	}

	async getCreations(): Promise<Creation[]> {
		const res = await fetch(`${SERVER_URL}/creations`)
		const data = await res.json();
		return data;
	}
}

const API = new ApiClass();
export default API;
