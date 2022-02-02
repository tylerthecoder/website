import { NextPage } from "next";
import HeaderPage from "../views/HeaderPage";


interface Props { }

const Panel: NextPage<Props> = (props) => {
	return <HeaderPage>
		<h1>Panel</h1>
		<a href="https://trello.com/personal69899119"> Trello </a>
	</HeaderPage>
}


export default Panel;