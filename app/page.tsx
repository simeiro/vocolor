"use client"; 

import Footer from "@/app/component/home/footer";
import Credit from "@/app/component/home/credit";
import ColorToThumbnail from "@/app/component/home/colorToThumbnail";
import Quiz from "@/app/component/quiz/quiz";
import Faq from "@/app/component/home/faq";
import { useState } from "react";

export default function Home() {
  const levels = [
    { id: 0, label: "初級" },
    { id: 1, label: "中級" },
    { id: 2, label: "上級" },
    { id: 3, label: "超上級" },
  ];
  const [isPlaying, setIsPlaying] = useState(false);
  const [dificulty, setDificulty] = useState(0);
  const [dificultyName, setDificultyName] = useState("");

  const startQuiz = (dificulty: number, name: string) => {
    setIsPlaying(true);
    setDificulty(dificulty);
    setDificultyName(name);
  };

  return (
    <>
      <main className="mt-10 px-2 max-w-xl min-h-screen mx-auto">
        {!isPlaying && (
          <div>
            <ColorToThumbnail></ColorToThumbnail>
            <div className="">
            <div className="flex items-center">
              <h2 className="text-2xl">難易度を選択</h2>
              <div className="relative group inline-block ml-1">
                <span className="cursor-help text-white bg-gray-500 w-4 h-4 flex items-center justify-center rounded-full -translate-y-1">
                  ?
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-40 p-2 text-sm text-white bg-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <p>初級: 1000万再生以上</p>
                  <p>中級: 100万再生以上</p>
                  <p>上級: 10万再生以上</p>
                  <p>超上級: ?再生以上</p>
                </div>
              </div>
            </div>
              <hr className="mb-10"/>
              <div className="flex flex-wrap items-center justify-center">
                {levels.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => startQuiz(id, label)}
                    className="w-35 h-10 mx-4 px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all block mt-4"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <Faq></Faq>
            <Credit></Credit>
            <Footer />
          </div>
        )};
        {isPlaying && (
          <div>
            <Quiz dificulty={dificulty} dificultyName={dificultyName}></Quiz>
          </div>
        )}

      </main>
      
    </>
  );
}
