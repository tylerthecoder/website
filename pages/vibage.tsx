import { NextPage } from "next";
import { useState } from "react";
import NavBar from "../components/NavBar";
import API from "../services/api";
import styles from "../styles/Vibage.module.css";

export interface VibageTrack {
	name: string;
	trackId: string;
	artist: string;
	imageUrl: string;
	likes: any[];
}

export interface SpotifyCredentials {
	accessToken: string;
	refreshToken: string;
}

export interface Vibe {
	tracks: VibageTrack[];
	_id: string;
	spotifyCredentials: SpotifyCredentials;
	__v: number;
	playlistId: string;
}


interface Props {
	vibe: Vibe;
}

const Vibage: NextPage<Props> = (props) => {
	const [vibe, setVibe] = useState(props.vibe);

	const [songId, setSongId] = useState("");

	const addSong = async () => {
		const vibe = await API.addSong(songId);
		setVibe(vibe);
	}

	const likeTrack = async (trackId: string) => {
		const vibe = await API.likeTrack(trackId);
		setVibe(vibe);
	}

	return <div>
		<NavBar />

		{vibe.tracks.map(track =>
			<div key={track.name}>
				<p> {track.artist} {track.name} </p>
				<p> Likes: {track.likes.length} </p>
				<button className={styles.btn} onClick={() => likeTrack(track.trackId)}> Like </button>
				<br />
			</div>
		)}


		<input value={songId} onChange={e => setSongId(e.target.value)} />
		<button className="btn" onClick={addSong}> Add Song </button>

	</div>
}

export async function getStaticProps() {
	const data = await API.getVibe();
	return {
		props: {
			vibe: data,
		}
	}
}




export default Vibage;