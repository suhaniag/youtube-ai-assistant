import type { Metadata } from "next";
import Sidebar from "./components/sidebar";
import "./globals.css";



export const metadata: Metadata = {
  title: "K-Create",
  description: "Data driven insights for your K-pop dance channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="h-full antialiased">
        <div className="flex h-full bg-slate-900 min-h-screen text-white">
          <Sidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
