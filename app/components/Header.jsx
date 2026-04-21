import Link from "next/link";

export default function Header() {
    return(
        <header className="flex items-center justify-center border-b border-teal-100 p-4 fixed top-0 left-0 right-0 bg-white z-50">
            <div className="flex justify-center">
                <Link href="/">
                    <span className="font-en font-semibold text-green-600 text-2xl">EZREAD</span>
                </Link>
            </div>
            {/* 로그인&회원가입 */}
            <nav className="absolute right-80 font-ko font-semibold text-teal-900 text-sm flex justify-center items-center">
                <Link href={"/login"}>로그인</Link>
                <span className="text-teal-900 mx-4">|</span>
                <Link href={"/signup"}>회원가입</Link>
            </nav>
        </header>
    )
}