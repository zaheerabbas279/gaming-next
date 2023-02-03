import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
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
        </div>
      </div>
    </>
  );
}
