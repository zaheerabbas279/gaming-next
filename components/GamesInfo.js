import Image from "next/image";
import styles from "../styles/GamesInfo.module.css";
export default function GamesInfo({ games }) {
  console.log("gaems info", games);
  const ori = "http://localhost:3000/";

  return (
    <>
      <div className="gamediv">
        {/* <h4>{games.title}</h4> */}
        {games.map((game) => {
          return (
            <div className="card">
              <div className="imageDiv">
                <img src={game.image} alt="" className={styles.game_image}/>
                {/* <Image
                  //   src={`${ori game.image}`}
                  src={ori + game.image}
                  height={200}
                  width={200}
                  alt="Game"
                /> */}
              </div>
              <h4>{game.title}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
