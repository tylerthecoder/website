import NavBar from "../components/NavBar";


interface Props {
	children: React.ReactNode;
}

const HeaderPage = ({ children }: Props) => {


	return <div>
		<NavBar />
		{children}
	</div>
}

export default HeaderPage;