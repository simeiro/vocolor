"use client"; 

import Footer from "@/app/component/footer";
import { useEffect, useState } from "react";
import songsData from "@/public/data/home.json"
import Image from "next/image";
import Link from "next/link";

type Song = typeof songsData.songs[number];

export default function Home() {
  //色、サムネイルの切り替え
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

  return (
    <>
      <main className="mt-10 px-2 max-w-xl min-h-screen mx-auto">
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

        {/*難易度選択*/}
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
            <div className="w-35 h-20 mx-4">
              <Link href="/easy">
                <p className="mt-4 mr-4 px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all">初級</p>
              </Link>
            </div>
            <div className="w-35 h-20 mx-4">
              <Link href="/normal">
                <p className="mt-4 mr-4 px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all">中級</p>
              </Link>
            </div>
            <div className="w-35 h-20 mx-4">
              <Link href="/hard">
                <p className="mt-4 mr-4 px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all">上級</p>
              </Link>
            </div>
            <div className="w-35 h-20 mx-4">
              <Link href="/veryhard">
                <p className="mt-4 mr-4 px-6 py-2 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all">超上級</p>
              </Link>
            </div>
          </div>
        </div>
        
        {/*よくある質問*/}
        <div className="mt-16">
          <h2 className="text-2xl">よくある質問</h2>
          <hr className="mb-4"/>
          <div className="max-w-xl mx-auto mt-8 space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="font-bold text-lg">Q. 明らかに背景でないものが問題に出てくる...</p>
                  <p className="mt-1 text-gray-700">
                      A. 背景の色はプログラムによって自動検出しているため、間違いが生じる場合があります。
                  </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="font-bold text-lg">Q. あの有名な曲が問題に出てこない</p>
                  <p className="mt-1 text-gray-700">
                      A. プログラムや問題の都合上、背景色が明らかでない背景、色味の少ない背景は除外しています。また、誤って除外されているケースもあります。
                  </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="font-bold text-lg">Q. 出てくる問題を教えて</p>
                  <p className="mt-1 text-gray-700">
                      A. この再生リストの曲からランダムに出題されます。
                  </p>
              </div>
          </div>
          <div className="mt-10">
            その他質問がある方はこちらからお問い合わせください
            <p><Link href="https://x.com/messages/compose?recipient_id=1245398114917203969" className="text-blue-500 hover:underline" target="_blank" >XのDM</Link></p>
            <p><Link href="https://forms.gle/8DBdHFBjBzKcw2pb9" className="text-blue-500 hover:underline" target="_blank">お問い合わせフォーム</Link></p>
          </div>
        </div>
        
        {/*参考元*/}  
        <div className="mt-20">
          <h2 className="text-2xl">参考元・クレジット</h2>
          <hr className="mb-4"/>
          <p>このゲームは下記、再生リスト、サービスを元に制作しました。この場をお借りして、感謝申し上げます。</p>

          <p className="mt-4 font-bold">曲名情報の取得</p>
          <Link href="https://vocadb.net/" target="_blank">
            <Image 
              src="/vocadb.png"
              width={200}
              height={200}
              alt="vocadb"
            />
          </Link>
          
          <p className="font-bold">再生リスト</p>
          <ul className="">
            <li><Link href="https://www.youtube.com/watch?v=19y8YTbvri8&list=PLTOj1BFS6AhN4Fz80WvdMu4cdOFZ1oW1q" className="text-blue-500 hover:underline" target="_blank">2024年 ボカロ ランキング</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=D6DVTLvOupE&list=PLTOj1BFS6AhOd93A68NicEahdJehOhXR6" className="text-blue-500 hover:underline" target="_blank">2023年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=vB8sxY_PJ_w&list=PLTOj1BFS6AhOSsQGt0SViSWpkz0P29KFM" className="text-blue-500 hover:underline" target="_blank">2022年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=e1xCOsgWG0M&list=PLTOj1BFS6AhMl8BG1IeIfv6wo6VmPP0sp" className="text-blue-500 hover:underline" target="_blank">2021年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=dHXC_ahjtEE&list=PLTOj1BFS6AhOsy4SeG1PrMk5lXkcz-Gg2" className="text-blue-500 hover:underline" target="_blank">2020年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=7zwCIz-Ohn4&list=PLTOj1BFS6AhNjA0PHfACKLV6P3yit0Q8n" className="text-blue-500 hover:underline" target="_blank">2019年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=Xg-qfsKN2_E&list=PLTOj1BFS6AhN6IT3NULwUAWtUEiv10a2Z" className="text-blue-500 hover:underline" target="_blank">2018年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=AS4q9yaWJkI&list=PLTOj1BFS6AhPGMOg-uJ2M6wNHQ_mS1LgT" className="text-blue-500 hover:underline" target="_blank">2017年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=8pGRdRhjX3o&list=PLTOj1BFS6AhNmN1OfnglYUiTLLBwvnflw" className="text-blue-500 hover:underline" target="_blank">2016年 人気 ボカロ</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=Jak2qiq_jJo&list=PLAaqbXSZIG6wKa-Hi3WVenBN2BgZKQu3c" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2015</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=XogSflwXgpw&list=PLAaqbXSZIG6ymGmvwiMMVTKyT2uLTd0vf" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2014</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=qnX2CdOBcDI&list=PLAaqbXSZIG6yHi-Pnr8i8gHbjXZLQlMkr" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2013</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=PqJNc9KVIZE&list=PLAaqbXSZIG6xnG23a0dKhwa2SVsmqNEC_" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2012</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=shs0rAiwsGQ&list=PLAaqbXSZIG6yyn2HLP5VDpkvVT0EZRn0v" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2011</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=HOz-9FzIDf0&list=PLAaqbXSZIG6zGmOjDYoQJ9q2a6KW9LMfD" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2010</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=hC8KrIY8qT4&list=PLAaqbXSZIG6xtoE1wmPDdwMj3-s1Sy7Zi" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2009</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=6CWAcwOhAsQ&list=PLAaqbXSZIG6yz0J4F4yzydqCndEY5YrgY" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2008</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=p3ymzi70Gjs&list=PLAaqbXSZIG6xmT6noHxHA2YD65cOXRZBS" className="text-blue-500 hover:underline" target="_blank">VOCALOID 2007</Link></li>
          </ul>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
