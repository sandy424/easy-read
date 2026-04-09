'use client';
import { useEffect, useState, type ChangeEvent } from 'react';

export default function Home() {

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [text, setText] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0] ?? null;
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="bg-green-100 w-full flex flex-col items-center p-12 font-ko">
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
        {!file && (
          <div className="border border-gray-300 hover:border-blue-400 border-dashed w-full rounded-xl flex flex-col items-center justify-center p-10">
            <img src="/picture.png" alt="사진" />
            <span className="mt-5 text-center">
              사진을 넣어주세요<br /> 또는 눌러서 선택하세요
            </span>
            <input type="file" accept=".jpg,.png,.jpeg,.pdf,.hwp" id="file" className="mt-12 hidden" onChange={handleFileChange}/>
            <label
              htmlFor="file"
              className="px-5 py-3 bg-green-200 text-gray-700 font-medium rounded-3xl cursor-pointer hover:bg-green-300 mt-8 flex gap-2 items-center"
            >
              <img src="/upload.png" alt="업로드" className="w-[22px]"/>
              사진 고르기
            </label>
          </div>
        )}

        {file && (
          <div className="flex flex-col items-center gap-4 p-6">
            {preview ? (
              <img src={preview} alt="선택된 파일 미리보기" className="max-h-[360px] rounded-xl object-contain" />
            ) : (
              <div className="w-full h-[360px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
                미리보기를 불러오는 중입니다...
              </div>
            )}
            <div className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-xl border border-gray-200">
              <span className="font-medium">선택된 파일:</span>
              <span className="text-sm text-gray-600">{file.name}</span>
              <button 
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
                className="px-3 py-1 bg-red-500 text-white text-base rounded-lg hover:bg-red-600"
              >
                지우기
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 글 바꾸기 버튼 */}
      <button className="px-5 py-2 border border-transparent bg-green-600 rounded-lg text-white font-regular text-base cursor-pointer hover:bg-green-700 mt-8"
      >
        글 바꾸기
      </button>

      {/* 변환 기록 영역 */}
      <div className="flex gap-6 px-4 py-8 mt-12 w-[800px] justify-between">
        <div className="flex items-center gap-4">
          <img src="/historyFile.png" alt="파일" className="w-[32px]"/>
          <h2 className="font-bold text-xl">변환 기록</h2>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white/70 font-medium border-solid border border-red-500 rounded-lg hover:bg-red-500 hover:text-white" >
          <img src="/trash.png" alt="쓰레기통" />
          삭제하기
        </button>
      </div>

      <div className="border border-dashed border-gray-300 w-[800px] h-[400px] rounded-xl p-4 flex flex-col items-center justify-center bg-white/55">
        <p className="text-center ">아직 변환한 기록이 없어요<br/>사진을 넣고 <span className="text-green-700 font-bold">글 바꾸기</span>를 해보세요 !</p>
      </div>
    </div>
  );
}
