export const metadata = {
  title: "First project",
  description: "A beginner's project on Next.js",
};

import NavBar from "@/components/navbar/NavBar";
import "../global.css";
import Footer from "@/components/footer/Footer";
import Container from "@/components/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-white w-">
        <Container>
          <NavBar></NavBar>
          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
