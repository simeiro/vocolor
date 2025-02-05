import Link from "next/link";
export default function Header(){
    return (
        <header className="bg-white w-auto">
            <Link href="/">
                <h1 className="text-3xl m-2">vocolor β版</h1>
            </Link>
            <hr/>
        </header>
    );
}