import Link from "next/link";
export default function Footer(){
    return (
        <footer className="mt-10 bg-white w-aut dark:bg-black">
            <hr className="mb-2"/>
            <p className="my-2 text-center dark:text-white">開発 <Link href="https://simeiro.com" target="_blank" className="mx-2">simeiro</Link></p>
        </footer>
    );
}