import "./globals.css";

export const metadata = {
  title: "React Footballi",
  description: "This is a sample app for showing football results and matchs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='w-full h-full' lang='fa_IR' dir='rtl'>
      <body className='w-full h-full bg-white'>{children}</body>
    </html>
  );
}
