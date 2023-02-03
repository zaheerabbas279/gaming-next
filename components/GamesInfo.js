import Image from "next/image";
import styles from "../styles/GamesInfo.module.css";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
export default function GamesInfo({ games }) {
  const ori = "http://localhost:3000/";
  const { user } = useContext(AuthContext);
  console.log("🚀 ~ file: Navbar.js:9 ~ Navbar ~ user", user);

  return (
    <>
      <div className="gamediv">
        {user ? (
          <>
            {games.map((game) => {
              return (
                <div className={styles.card}>
                  <div className="imageDiv">
                    <img
                      src={game.image}
                      alt=""
                      className={styles.game_image}
                    />
                  </div>
                  <div className={styles.info}>
                    <h2 style={{ margin: "0px" }}>{game.title}</h2>
                    <p className={styles.description}>{game.description}</p>
                    <Link href={game.link}>Read More...</Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h4>You need to login to view the guide!</h4>
          </>
        )}
      </div>
    </>
  );
}
