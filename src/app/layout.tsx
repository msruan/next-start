export const metadata = {
  title: "First project",
  description: "A beginner's project on Next.js",
};

import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-white">
        <Container>
          <NavBar></NavBar>
          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
