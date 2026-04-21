import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
} : {
  children: React.ReactNode
}) {
  return(
    <html lang="ko">
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}