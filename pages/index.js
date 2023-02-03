import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div
        style={{
          // width: "100%",
          // height: 200,
          // position: "relative",
          display:'flex',
          justifyContent:'center'
        }}
      >
        <Image
          src={"/banner.jpg"}
          alt="banner"
          className="banner_image"
          height={400}
          width={1000}
        />
      </div>

      <div className="container">
        <h2>Welcome to Next Gaming!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ipsa odit natus corrupti rem accusamus ducimus eligendi vitae nemo
          explicabo sint, ea, nesciunt numquam quia? In atque molestias totam
          laborum nobis, minus esse natus aperiam facere officiis possimus eaque
          accusantium dolor tempora consequatur corrupti aspernatur harum earum
          magni. Quibusdam, possimus!
        </p>
      </div>
    </>
  );
}
