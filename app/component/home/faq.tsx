import Link from 'next/link';

export default function Faq(){
    return(
        <div className="mt-16">
          <h2 className="text-2xl">よくある質問</h2>
          <hr className="mb-4"/>
          <div className="max-w-xl mx-auto mt-8 space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:text-black">
                  <p className="font-bold text-lg">Q. 明らかに背景でないものが問題に出てくる...</p>
                  <p className="mt-1 text-gray-700">
                      A. 背景の色はプログラムによって自動検出しているため、間違いが生じる場合があります。
                  </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg shadow-md dark:text-black">
                  <p className="font-bold text-lg">Q. あの有名な曲が問題に出てこない</p>
                  <p className="mt-1 text-gray-700">
                      A. プログラムや問題の都合上、背景色が明らかでない背景、色味の少ない背景は除外しています。また、誤って除外されているケースもあります。
                  </p>
              </div>
              {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <p className="font-bold text-lg">Q. 出てくる問題を教えて</p>
                  <p className="mt-1 text-gray-700">
                      A. この再生リストの曲からランダムに出題されます。
                  </p>
              </div> */}
          </div>
          <div className="mt-10">
            その他質問がある方はこちらからお問い合わせください
            <p><Link href="https://x.com/messages/compose?recipient_id=1245398114917203969" className="text-blue-500 hover:underline" target="_blank" >XのDM</Link></p>
            <p><Link href="https://forms.gle/8DBdHFBjBzKcw2pb9" className="text-blue-500 hover:underline" target="_blank">お問い合わせフォーム</Link></p>
          </div>
        </div>
    );
}