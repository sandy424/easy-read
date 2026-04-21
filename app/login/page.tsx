export default function LoginPage() {
  return (
    <div className="bg-mint-10 w-full flex justify-center items-center scroll-hidden">
        <div className="border border-transparent bg-mint-50 rounded-2xl w-[480px] h-[570px] m-20 flex flex-col items-center p-8">
            <span className="text-teal-900 text-2xl font-semibold">
                EZREAD
            </span>
            <div className="flex flex-col gap-10 pt-16">
                <input type="text" placeholder="아이디 "className="border border-transparent rounded-xl bg-white/70 w-96 h-10 pl-7 font-[700] text-sm" />
                <input type="text" placeholder="8자 이상의 비밀번호를 입력하세요 "className="border border-transparent rounded-xl bg-white/70 w-96 h-10 pl-7 font-[700] text-sm" />
                <input type="text" placeholder="나만의 질문을 선택하세요 "className="border border-transparent rounded-xl bg-white/70 w-96 h-10 pl-7 font-[700] text-sm" />
                <input type="text" placeholder="나만의 질문에 대한 답을 적으세요 "className="border border-transparent rounded-xl bg-white/70 w-96 h-10 pl-7 font-[700] text-sm" />
            </div>
            <button className="px-6 py-2 border border-transparent bg-mint-100 rounded-lg text-mint-900 font-semibold text-base cursor-pointer hover:bg-mint-600 mt-8">
                로그인
            </button>
            <div className="flex text-xs pt-4">
                <span>아직 계정이 없으신가요?</span>
                <span className="text-teal-900 mx-3">|</span>
                <a href="/signup" className="text-teal-700 font-semibold">회원가입하러 가기</a>
            </div>
        </div>
    </div>
  )
}