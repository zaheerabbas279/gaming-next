import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log("🚀 ~ file: Navbar.js:9 ~ Navbar ~ user", user);

  return (
    <>
      <div className={styles.navbar_container}>
        <Image
          src={"/icons/game-controller.png"}
          height={50}
          width={48}
          alt="Next Gaming"
        />
        <h1 className={styles.navbar_heading}>Next Gaming</h1>

        {authReady && (
          <div className={styles.navbar_options}>
            <Link href="#">
              <p className={styles.nav_link}>
                <strong>Home</strong>
              </p>
            </Link>
            <Link href="#">
              <p className={styles.nav_link}>
                <strong>About</strong>
              </p>
            </Link>
            <Link href="/games">
              <p className={styles.nav_link}>
                <strong>Games Guide</strong>
              </p>
            </Link>
            {user && <span>{user.email}</span>}
            {!user && (
              <button className={styles.btn_login} onClick={login}>
                Login/Sign up
              </button>
            )}
            {user && (
              <button className={styles.btn_login} onClick={logout}>
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
