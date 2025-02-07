import Image from 'next/image';
import Link from 'next/link';

export default function Credit(){
    return (
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
    );
}