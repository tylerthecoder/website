import { NextPage } from "next";
import FullHeaderPage from "../views/FullHeaderPage";
import Head from 'next/head'
import useTypeyText from "../utils/hooks/useTypyText";



const Panel: NextPage = () => {
	const { typedText: welcomeMessage, cursor } = useTypeyText("Welcome Tylord")


	return <FullHeaderPage>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
			<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
		</Head>
		<div className="h-full bg-black text-terminal">
			<h1 className="text-6xl font-terminal mb-4">
				{"|>"}
				{welcomeMessage}
				{cursor && <span className="-ml-2 w-0"> | </span>}
			</h1>
			<div className="flex">
				<a href="https://trello.com/personal69899119">
					<div className="p-10 m-4 border-white border-2 rounded-sm text-lg">
						Trello
					</div>
				</a>
				<a href="https://todoist.com/app/today">
					<div className="p-10 m-4 border-white border-2 rounded-sm text-lg">
						Todoist
					</div>
				</a>
			</div>
		</div>
	</FullHeaderPage>
}


export default Panel;