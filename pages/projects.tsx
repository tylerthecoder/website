import { NextPage } from "next";
import NavBar from "../components/NavBar";
import API, { Creation } from "../services/api";
import Image from "next/image";
import HeaderPage from "../views/HeaderPage";

interface IProjectProps {
	creation: Creation;
}

const Project = ({ creation }: IProjectProps) => {
	return <div className="
		relative
		shadow-lg
		rounded
	">
		<div className="w-full relative">
			<Image
				src={creation.img}
				alt={creation.name}
				// layout="fill"
				width={200}
				height={200}
			/>
		</div>
		<div className="px-4 py-6">
			<p> {creation.name} </p>
			<p> {creation.link} </p>
		</div>
	</div>
}

interface Props {
	creations: Creation[];
}

const Projects: NextPage<Props> = (props) => {
	return (
		<HeaderPage>
			<div className="grid grid-cols-3 gap-4">
				{props.creations.map(creation => <Project key={creation.name} creation={creation} />)}
			</div>
		</HeaderPage>
	)
}

export async function getServerSideProps() {
	const data = await API.getCreations();
	return {
		props: {
			creations: data,
		}
	}
}

export default Projects;


