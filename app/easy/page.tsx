"use client"; 

import { useEffect, useState } from "react";
import songsData from "@/public/data/veryhard_hue.json"
import { getRandomSongs }from "@/app/component/getQuiz";
import { shuffleArray } from "@/app/component/shuffle";
import Link from "next/link";

type Song = typeof songsData.songs[number];

export default function Home() {
    const questions = 5;
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [currentNumber, setCurrentNumber] = useState(1);
    const [correctCount, setCorrectCount] = useState(0);
    const [quizSet] = useState(getRandomSongs(0));
    
    useEffect(() => {
        // クライアント側でのみランダムな曲を選択
        const randomIndex = Math.floor(Math.random() * 5);
        setCurrentSong(quizSet[randomIndex].correctSong);
    }, [quizSet]);

    const [selectedChoice, setselectedChoice] = useState("");
    const firstCorrect = quizSet[0].correctSong;
    const firstWrongs = quizSet[0].wrongSongs;
    const [currentQuiz, setCurrentQuiz] = useState(shuffleArray([firstCorrect, ...firstWrongs]));

    //answer関連
    const [answerButton, setAnswerButton] = useState(false);
    const [answerResults, setAnswerResults] = useState<boolean[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const answered = () => {
        setAnswerButton(true);
        if (selectedChoice === quizSet[currentNumber -1].correctSong.title) {
            setCorrectCount(correctCount + 1);
            setIsCorrect(true);
            setAnswerResults([...answerResults, true]);
        } else {
            setIsCorrect(false);
            setAnswerResults([...answerResults, false]);
        }
        
    }

    //onClick処理
    const next = () => {
        const correct = quizSet[currentNumber].correctSong;
        const wrongs = quizSet[currentNumber].wrongSongs;
        setAnswerButton(false);
        setCurrentNumber(currentNumber + 1);
        setCurrentQuiz(shuffleArray([correct, ...wrongs]));
    };
    const [isResult, setIsResult] = useState(false);
    const showResult = () => {
        setIsResult(true);
    };
    const [isCopied, setIsCopied] = useState(false);
    const copyLink = () => {
        const shareUrl = `https://vocolor.vercel.app/`;
        
        navigator.clipboard.writeText(shareUrl).then(() => {
            setIsCopied(true); // コピーされたら、状態をtrueにする
            setTimeout(() => {
            setIsCopied(false); // 2秒後に非表示にする
            }, 1000); // 2秒間表示
        }).catch(err => {
            console.error("コピーに失敗しました:", err);
        })
    };
    
    //ローディング表示
    if (!currentSong) {
        // currentSong のセット前は何も表示しない
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <>
        <main className="mt-10 px-2 max-w-xl min-h-screen mx-auto">
            <Link href="/"><h2 className="text-3xl text-center font-bold">背景の色からボカロ曲を当てるゲームβ</h2></Link>
            {/* リザルト画面と問題画面の切り分け */}
            {!isResult && (
                <div>
                    <h2 className="mt-10 mb-1 text-2xl">{currentNumber}問目</h2>
                    <div className="max-w-xl h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                            className="h-2 bg-blue-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${(currentNumber / questions) * 100}%` }}
                        />
                    </div>
                    <div className="relative max-w-[95%] mx-auto mt-10 aspect-video overflow-hidden">
                        {!answerButton && (
                            <div
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 `}
                            style={{ backgroundColor: quizSet[currentNumber -1].correctSong.color }}
                        ></div>
                        )}
                        {answerButton && (
                            <iframe
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 `}
                            src={`https://www.youtube.com/embed/${quizSet[currentNumber -1].correctSong.id}`} 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            allowFullScreen
                        />
                        )}
                    </div>

                    {/* ラジオボタンのリスト */}
                    {!answerButton && (
                        <div>
                            <div className="mt-16">
                                <div className="flex flex-col gap-2">
                                    {currentQuiz.map((choice) => (
                                    <label key={choice.id} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                        type="radio"
                                        name=""
                                        value={choice.title}
                                        checked={selectedChoice === choice.title}
                                        onChange={() => setselectedChoice(choice.title)}
                                        className="hidden"
                                        />
                                        <span
                                        className={`w-5 h-5 flex items-center justify-center border-2 rounded-lg transition-all ${
                                            selectedChoice === choice.title
                                            ? "border-blue-500 bg-blue-500"
                                            : "border-gray-400"
                                        }`}
                                        >
                                        {selectedChoice === choice.title && (
                                            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                        )}
                                        </span>
                                        <span className="text-lg">{choice.title}</span>
                                    </label>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={answered}
                                    className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all "
                                >
                                    回答する
                                </button>
                            </div>
                        </div>
                    
                    
                    )}
                    
                    {/* 回答ボタン */}
                    {answerButton && (
                        <div className="mt-4">
                            {isCorrect && (
                                <p className="text-center font-bold  text-2xl text-green-500">正解</p>
                            )}
                            {!isCorrect && (
                                <p className="text-center font-bold  text-2xl text-red-500">不正解</p>
                            )}
                            <div className="mt-4 flex flex-col">
                                {currentQuiz.map((song) => (
                                    <div key={song.id} className="mb-2 flex items-center gap-2">
                                        {/* 曲の色を示すボックス */}
                                        <div
                                            className="w-5 h-5 border-2 border-black rounded-lg"
                                            style={{ backgroundColor: song.color }}
                                        ></div>

                                        {/* YouTubeリンク付きタイトル */}
                                        <Link href={`https://www.youtube.com/watch?v=${song.id}`} target="_blank" rel="noopener noreferrer">
                                            <p className="text-lg hover:underline">{song.title}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            {currentNumber < questions && (
                                <div className="flex items-center justify-center">
                                    <button
                                    onClick={next}
                                    className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all"
                                    >
                                        次へ
                                    </button>
                                </div>
                            )}
                            {currentNumber === questions && (
                                <div className="flex items-center justify-center"> 
                                    <button
                                    onClick={showResult}
                                    className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all"
                                    >
                                        結果を見る
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* 結果画面 */}
            {isResult && (
                <div className="mt-10">
                    <h2 className="text-2xl">結果</h2>
                    <hr className="mb-4"/>
                    <p className="text-center text-2xl">あなたの得点は<span className="mx-1 text-3xl font-bold text-blue-500">{correctCount}</span>点でした！</p>
                    <p className="mt-2 text-center text-xl">難易度: 初級</p>
                    <div className="mt-4 flex justify-center">
                        <button
                        onClick={() => window.location.reload()}
                        className="mt-4 mr-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all"
                        >
                        もう一度遊ぶ
                        </button>
                        <Link href="/" className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all">タイトルへ</Link>
                    </div>
                    <div>
                        <h2 className="mt-16 text-2xl">解答</h2>
                        <hr className="mb-10"/>
                        <div className="flex w-xl items-center justify-center">
                            <div className="flex flex-col">
                                {quizSet.map((quiz, index) => (
                                    <div key={index} className="mb-2 flex items-center gap-2">
                                        <div className="w-16">
                                            {answerResults[index] && (
                                                <p className="text-green-500">正解</p>
                                            )}
                                            {!answerResults[index] && (
                                                <p className="text-red-500">不正解</p>
                                            )}
                                        </div>
                                        <div
                                            className="w-5 h-5 border-2 border-black rounded-lg"
                                            style={{ backgroundColor: quiz.correctSong.color }}
                                        ></div>
                                        <Link href={`https://www.youtube.com/watch?v=${quiz.correctSong.id}`} target="_blank" rel="noopener noreferrer">
                                            <p className="text-lg hover:underline">{quiz.correctSong.title}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-16 text-2xl">共有する</h2>
                    <hr className="mb-4"/>
                    <div className="flex items-center justify-center">
                        <Link href={`https://x.com/intent/post?text=${correctCount}点を獲得しました！(初級)%0A&url=https://vocolor.vercel.app%0A&hashtags=背景の色からボカロ曲を当てるゲーム`} target="_blank">
                            <p className="mt-4 mr-4 px-4 py-1 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all">Xで共有</p>
                        </Link>
                        <button
                        onClick={copyLink}
                        className="mt-4 px-4 py-1 text-white bg-gray-600 hover:bg-gray-700 rounded-lg shadow-md transition-all"
                        >
                        {isCopied ? "コピーしました" : "リンクをコピー"}
                        </button>
                    </div>
                </div>
            )}
        </main>
        </>
    );
}
