import { NextPage } from "next";
import NavBar from "../components/NavBar";
import API, { Creation } from "../services/api";
import Image from "next/image";



interface IProjectProps {
	creation: Creation;
}

const Project = ({ creation }: IProjectProps) => {
	return <div className="relative">
		<Image
			src={creation.img}
			alt={creation.name}
			width={100}
			height={100}
		/>
		<p> {creation.name} </p>
		<p> {creation.link} </p>
	</div>
}

interface Props {
	creations: Creation[];
}

const Projects: NextPage<Props> = (props) => {
	return (
		<div>
			<NavBar />
			<div className="grid grid-cols-3 gap-4">
				{props.creations.map(creation => <Project key={creation.name} creation={creation} />)}
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const data = await API.getCreations();
	return {
		props: {
			creations: data,
		}
	}
}

export default Projects;


