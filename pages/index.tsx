import type { NextPage } from 'next'
import useTypeyText from '../utils/hooks/useTypyText'
import headshotPic from "../public/headshot.webp"
import homeBg from "../public/red-background.jpg"
import { CrazyImage } from '../components/CrazyImage'
import Image from "next/image";
import { useEffect, useState } from 'react'
import API, { CurrentSong } from '../services/api'
import { NowPlaying } from '../components/NowPlaying'
import { SplashBackground } from '../components/SpashBackground'
import styles from "../styles/Home.module.css"
import Link from "next/link"


const Subtitle = () => {
  const { typedText, cursor } = useTypeyText("Full Stack Developer");

  return <div>
    <p className="text-white text-center text-xl">
      {typedText}
      {cursor && <span className="w-0"> | </span>}
    </p>
  </div>
}

const Home: NextPage = () => {
  const [song, setSong] = useState<CurrentSong | null>();

  useEffect(() => {
    API.getCurrentSong().then(setSong);
  });

  return <div>
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* <div className="pointer-events-none">
        <Image
          src={homeBg}
          alt="background image"
          layout="fill"
          className="absolute -z-1"
        />
      </div> */}
      <div className="flex items-center">
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-1 pointer-events-none">
          <SplashBackground />
        </div>
        <CrazyImage
          src={headshotPic}
          alt="Tyler's headshot"
          width={225}
          height={300}
        />
        <div>
          <h1 className="text-6xl text-white"> Hi, I'm Tyler </h1>
          <Subtitle />
          <br />
          {song && <NowPlaying currentSong={song} />}
        </div>
      </div>
      <div className="pt-20 flex justify-evenly w-full space-x-0">
        <Link href={"about"}>

          <button className={styles.btn}> Projects </button>
        </Link>
        <button className={styles.btn}> Hire Me </button>
      </div>
    </div>
  </div>

}

export default Home
