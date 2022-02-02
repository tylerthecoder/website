import { NextPage } from "next";
import NavBar from "../components/NavBar";
import headshot from "../public/headshot.webp";
import supplypikeImg from "../public/supplypike.png";
import Image from "next/image";
import { motion } from "framer-motion"
import { BouncingBackground } from "../components/BouncingBackground";
import { SplashBackground } from "../components/SpashBackground";



const FallingBookmark = () => {
	return <motion.div
		animate={{
			y: [-400, 0],
			display: "block"
		}}
		className="hidden"
	>
		<div className="p-4 pt-8 white bg-gray-600 rounded-b-3xl overflow-hidden border-l-4 border-r-4 border-b-4 border-red-700 shadow-2xl">
			<h1 className="text-center text-4xl"> Hi I'm Tyler </h1>
			<Image
				src={headshot}
				alt="headshot"
				layout="responsive"
			/>
		</div>
	</motion.div>
}


const About: NextPage = () => {
	return (
		<div className={"flex flex-col h-screen relative"}>
			<NavBar />
			<div className={"flex flex-grow bg-gray-800 relative"}>
				<div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
					<BouncingBackground />
				</div>
				<div className={"absolute top-0 left-8"}>
					<FallingBookmark />
				</div>
				<div className="w-1/5" ></div>
				<div className="p-5 w-4/5 body-text text-white z-1">
					<p> Hello! My name is Tyler Tracy. I'm a full stack developer </p>

					<p>
						I graduated from the University of Arkansas in December 2020 with a B.S. in Computer Science.
					</p>

					<h3 className="text-2xl font-bold mt-4"> Experience </h3>

					<div className="grid grid-cols-3 gap-4 my-5">
						<div className="relative bg-white p-3 rounded-3xl box-border">
							<Image
								src={supplypikeImg}
								alt="supplypike"
								layout="responsive"
							/>
							<p className="fun-text text-black text-center"> SupplyPike </p>
						</div>
						<div className="col-span-2">
							<p>
								My first internship was as SupplyPike
							</p>
						</div>
					</div>

					<p>
						Around the age of 30, I plan to start my world domination plan.
						I will topple governments, starting with america, in hopes to start the next phase of humanity.
						To accomplish this, a large amount of stealth and charisma will be used.
						Then the abolition of human drivable cars, Mars colonization, and a the creation of
						Dyson sphere around our sun will then be of utmost priority to me in order to rapidly
						progress the human race. I will work from the shadows and create powerless figure
						heads so assassination attempts will not be a problem for me. If all goes well immortality
						will be common place by when I am around the age of 60 so death will never be known to me.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;