import easyData from "@/public/data/easy_hue.json";
import normalData from "@/public/data/normal_hue.json";
import hardData from "@/public/data/hard_hue.json";
import veryHardData from "@/public/data/veryhard_hue.json";


type Song = typeof easyData.songs[number];

/**
 * difficulty
 * 0: easy
 * 1: normal
 * 2: hard
 * 3: very hard
 */
export function getRandomSongs(difficulty: number): { correctSong: Song; wrongSongs: Song[] }[] {
    let songs: Song[];  
    switch (difficulty) {
        case 0:
            songs = easyData.songs;
            break;
        case 1:
            songs = normalData.songs;
            break;
        case 2:
            songs = hardData.songs;
            break;
        case 3:
            songs = veryHardData.songs;
            break;
        default:
            songs = []; // デフォルトケース（エラー回避）
    }


    const songCount = songs.length;

  
    const selectedIndices = new Set<number>();
  
    function getRandomIndex(excludeIndices: Set<number>): number {
      let index;
      do {
        index = Math.floor(Math.random() * songCount);
      } while (excludeIndices.has(index));
      return index;
    }
  
    const results = [];
    while (selectedIndices.size < 5) {
      const correctIndex = getRandomIndex(selectedIndices);
      selectedIndices.add(correctIndex);
  
      const correctSong = songs[correctIndex];
  
      // 周囲10曲を取得
      const surroundingIndices = [];
      for (let i = -5; i <= 5; i++) {
        if (i !== 0) {
          const index = (correctIndex + i + songCount) % songCount;
          surroundingIndices.push(index);
        }
      }
  
      // 不正解曲を取得（color が異なる曲）
      const wrongSongs: Song[] = [];
      const usedColors = new Set([correctSong.color]);
  
      while (wrongSongs.length < 3) {
        const index = surroundingIndices[Math.floor(Math.random() * surroundingIndices.length)];
        const song = songs[index];
        if (!usedColors.has(song.color)) {
          usedColors.add(song.color);
          wrongSongs.push(song);
        }
      }
  
      results.push({ correctSong, wrongSongs });
    }
  
    return results;
  }