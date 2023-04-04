import Header from "../../components/Header";

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
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
