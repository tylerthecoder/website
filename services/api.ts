import { Vibe } from "../pages/vibage";

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
		const res = await fetch(`${SERVER_URL}/me/listening-to`)
		const data = await res.json();
		return data;
	}

	async getCreations(): Promise<Creation[]> {
		const res = await fetch(`${SERVER_URL}/me/creations`)
		const data = await res.json();
		return data;
	}

	async getLights(): Promise<any[]> {
		const res = await fetch(`${SERVER_URL}/lights`);
		return res.json();
	}

	async getVibe(): Promise<Vibe> {
		const res = await fetch(`${SERVER_URL}/vibage`);
		return res.json();
	}

	async addSong(trackId: string): Promise<Vibe> {
		const res = await fetch(`${SERVER_URL}/vibage/track/`, {
			method: "POST",
			body: JSON.stringify({
				trackId
			})
		});
		return res.json();
	}

	async likeTrack(trackId: string): Promise<Vibe> {
		const res = await fetch(`${SERVER_URL}/vibage/track/${trackId}/like`, {
			method: 'POST',
		});
		return res.json();
	}
}

const API = new ApiClass();
export default API;
