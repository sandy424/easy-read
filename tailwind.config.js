/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        en: ['Georgia', 'Times New Roman', 'serif'],
        ko: ['Inter', 'Noto Sans KR', 'sans-serif'],
      },
      colors: {
        mint: {
          10: '#F7FBFA',
          50:  '#E8F5F2',  // 카드/섹션 배경
          100: '#C5E8DF',  // 테두리·구분선
          600: '#3B8C78',  // 버튼·포인트
          900: '#1E4F44',  // 제목 텍스트
        }
      }
    },
  },
  plugins: [],
}

