import type { InferGetServerSidePropsType, NextPage } from 'next'
import useTypeyText from '../utils/hooks/useTypyText'
import headshotPic from "../public/headshot.webp"
import { CrazyImage } from '../components/CrazyImage'
import Image from "next/image";
import API from '../services/api'
import { NowPlaying } from '../components/NowPlaying'
import { SplashBackground } from '../components/SpashBackground'
import styles from "../styles/Home.module.css"
import Link from "next/link"

const Subtitle = () => {
  const { typedText, cursor } = useTypeyText("Full Stack Developer");

  return <div>
    <p className="text-white text-center text-xl h-8">
      {typedText}
      {cursor && <span className="w-0"> | </span>}
    </p>
  </div>
}

export async function getServerSideProps() {
  const data = await API.getCurrentSong()
  return {
    props: {
      currentSong: data
    },
  }
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const showAboutButton = false;
  const showProjectsButton = false;

  return <div>
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none">
        <SplashBackground />
      </div>
      <div className="md:flex md:items-center z-0">
        <CrazyImage
          src={headshotPic}
          alt="Tyler's headshot"
          width={225}
          height={300}
        />
        <div>
          <h1 className="text-6xl text-white"> Hi, I'm Tyler </h1>
          <Subtitle />
          <NowPlaying currentSong={props.currentSong} />
        </div>
      </div>
      <div className="pt-20 flex justify-evenly w-full space-x-0">
        {showAboutButton &&
          <Link href={"about"} passHref>
            <button className={styles.btn}> About </button>
          </Link>
        }
        <Link href={"https://files.tylertracy.com/resume.pdf"} passHref>
          <button className={styles.btn}>
            <div className='mr-1' >
              <Image
                src="/resume.svg"
                width={32}
                height={32}
                alt="Github logo"
              />
            </div>
            Resume
          </button>
        </Link>
        <Link href={"https://github.com/tylerthecoder"} passHref>
          <button className={styles.btn}>
            <div
              className='mr-1'
            >
              <Image
                src="/github.png"
                width={32}
                height={32}
                alt="Github logo"
              />
            </div>
            Github
          </button>
        </Link>
        {showProjectsButton &&
          <Link href={"projects"} passHref>
            <button className={styles.btn}> Projects </button>
          </Link>
        }
      </div>
    </div>
  </div>
}



export default Home
