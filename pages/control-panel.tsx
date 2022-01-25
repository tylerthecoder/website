import { NextPage } from 'next';
import API from '../services/api';

interface Props {
	lights: {};
}

const ControlPanel: NextPage<Props> = (props: Props) => {


	return (
		<div>
			<p> Lights </p>
			{Object.values(props.lights).map((light: any) => <div key={light.uniqueid}> {light.name} </div>)}

		</div>
	);
}


export async function getStaticProps() {
	const data = await API.getLights();

	return {
		props: {
			lights: data,
		}
	}
}



export default ControlPanel;