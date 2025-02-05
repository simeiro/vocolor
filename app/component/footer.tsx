import Link from "next/link";
export default function Footer(){
    return (
        <footer className="mt-10 bg-white w-auto">
            <hr className="mb-2"/>
            {/* <div className="flex flex-wrap items-center justify-center">
                <Link href="/faq" className="mx-2">利用規約</Link>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScR17RoprOYKh7s02uqvdaP_rGeI_Pmi2JzAaJb-CSm_bb2Yw/viewform?usp=sharing" target="_blank" className="mx-2">お問い合わせ</Link>
                <Link href="/faq" className="mx-2">FAQ</Link>
                
            </div> */}
            <p className="my-2 text-center">開発 <Link href="https://simeiro.com" target="_blank" className="mx-2">simeiro</Link></p>
        </footer>
    );
}