import Link from "next/link";

export default function Header() {
    return(
        <div className="flex items-center justify-center p-4 fixed top-0 left-0 right-0 bg-white z-50">
            <Link href="/">
                <h3 className="font-en font-semibold text-green-600 text-2xl">EZREAD</h3>
            </Link>
        </div>
        // 로그인&회원가입
    )
}