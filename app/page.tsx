export default function Home() {
  return (
    <div className="bg-green-100 w-full h-screen flex flex-col items-center p-12 font-ko">
      <h1 className="font-bold text-xl">글을 쉽게 읽을 수 있어요</h1>
      <p className="flex flex-col items-center mt-8 text-center">
        <span>이런 글을 쉽게 바꿔드립니다</span>
        <span>
          <span className="text-green-600 font-bold">사진을 넣으면</span>, 글을 쉽게 바꿔드려요
        </span>
      </p>

      <div className="flex gap-8">
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/announce.png" alt="공지사항" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">안내문</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/notice.png" alt="공지사항" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">공지사항</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/contract.png" alt="계약서" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">계약서</span>
        </div>
        <div className="border border-green-400 rounded-2xl p-4 mt-8 w-40 bg-white flex flex-col items-center justify-center">
          <img src="/exam.png" alt="시험지" className="w-8 h-8" />
          <span className="text-base font-Regular mt-1">시험지</span>
        </div>
      </div>

      {/* 사진 업로드 영역 */}
      <h2 className="font-bold text-xl mt-10">사진을 넣어주세요</h2>
      <div className="border border-transparent rounded-xl bg-white w-[800px] p-4 mt-8">
        <div className="border border-blue-400 border-dashed w-full rounded-xl flex flex-col items-center justify-center p-10">
          <img src="/picture.png" alt="사진" />
          <span className="mt-5 text-center">
            사진을 넣어주세요<br /> 또는 눌러서 선택하세요
          </span>
          <input type="file" id="file" className="mt-12 hidden" />
          <label
            htmlFor="file"
            className="px-5 py-3 bg-green-200 text-gray-700 font-medium rounded-3xl cursor-pointer hover:bg-green-300 mt-8 flex gap-2 items-center"
          >
            <img src="/upload.png" alt="업로드" className="w-[22px]"/>
            사진 고르기
          </label>
        </div>
      </div>

      {/* 글 바꾸기 버튼 */}
      <button className="px-5 py-2 border border-transparent bg-green-600 rounded-lg text-white font-regular text-base cursor-pointer hover:bg-green-700 mt-8">글 바꾸기</button>
    </div>
  );
}
