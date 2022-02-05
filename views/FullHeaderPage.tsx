import NavBar from "../components/NavBar";


interface Props {
	children: React.ReactNode;
}

const FullHeaderPage = ({ children }: Props) => {
	return <div className="flex flex-col h-full">
		<div className="flex-grow">
			{children}
		</div>
	</div>
}

export default FullHeaderPage;