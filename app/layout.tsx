import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black text-white scrollbar-thin scrollbar-thumb-[#587ce0] scrollbar-track-transparent scrollbar-thumb-rounded-xl"
    >
      <link
        href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
        rel="stylesheet"
      />
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
