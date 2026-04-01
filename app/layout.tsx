import Header from "./ui/Header";
import "./globals.css";

export default function Layout({
  children,
} : {
  children: React.ReactNode
}) {
  return(
    <html lang="ko">
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}