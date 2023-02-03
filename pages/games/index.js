import GamesInfo from "../../components/GamesInfo";
export const getStaticProps = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "39baed5a96msh2ab450a07fb78bdp1ccdbdjsn14dd5d39e3ad",
      "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://videogames-news2.p.rapidapi.com/videogames_news/recent",
    options
  );

  const data = await response.json();
  return {
    props: {
      games: data,
    },
  };
};

export default function Games({ games }) {
  console.log("🚀 ~ file: index.js:26 ~ Games ~ games", games);
  return (
    <>
      <div>
        <h1>Games Guide</h1>
        <GamesInfo games={games} />
      </div>
    </>
  );
}
