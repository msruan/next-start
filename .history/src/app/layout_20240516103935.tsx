export const metadata = {
  title: "First project",
  description: "A beginner's project on Next.js",
};

import NavBar from "@/components/navbar/NavBar";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-">
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
