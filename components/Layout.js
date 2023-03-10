import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles._container}>{children}</div>
      <Footer />
    </>
  );
}
