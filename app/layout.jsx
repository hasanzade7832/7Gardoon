import "../styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }) => {
  return (
    <html lang="fa-IR">
      <body className="mt-20">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
