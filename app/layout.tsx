import NavBar from "@/components/NavBar/NavBar";
import "./global.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "SnapVault",
  description: "Showcase your snaps",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
