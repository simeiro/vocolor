"use client"; 
import { useEffect, useState } from "react";
import songsData from "@/public/data/home.json"

type Song = typeof songsData.songs[number];

export default function ColorToThumbnail(){
    const [toggle, setToggle] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
          setToggle((prev) => !prev);
        }, 2000);
    
        return () => clearInterval(interval);
      }, []);
      
      //ロード毎にランダムに曲を選択
      const [currentSong, setCurrentSong] = useState<Song | null>(null);
      useEffect(() => {
        const randomIndex = Math.floor(Math.random() * songsData.songs.length);
        setCurrentSong(songsData.songs[randomIndex]);
      }, []);
    
      //ローディング表示
      if (!currentSong) {
        // currentSong のセット前は何も表示しない
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
      }

      return(
        <div className="mb-16">
            <h2 className="text-3xl text-center font-bold">背景の色からボカロ曲を当てるゲームβ</h2>
            <div className="relative max-w-[95%] mx-auto mt-10 aspect-video overflow-hidden">
                <div
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    toggle ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: currentSong.color }}
                ></div>
                <iframe
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                    toggle ? "opacity-0" : "opacity-100"
                    }`}
                    src={`https://www.youtube.com/embed/${currentSong.id}`} 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>

      );
}