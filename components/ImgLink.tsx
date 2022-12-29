import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./ImgLink.module.css";

export default function ImgLink() {
  return (
    <Box sx={{ width: 800 }}>
      {itemData.map((item) => (
        <Button
          key={item.img}
          href={item.link}
          target={"_blank"}
          className={styles.button}
        >
          <img
            key={item.img}
            src={item.img}
            alt={item.title}
            width={item.width}
            height={item.height}
          />
        </Button>
      ))}
    </Box>
  );
}

const itemData = [
  {
    img: "/Img/Ant_Design.png",
    title: "Ant_Design",
    width: "200",
    height: "200",
    link: "https://ant.design/index-cn",
  },
  {
    img: "/Img/Arduino.png",
    title: "Arduino",
    width: "200",
    height: "200",
    link: "https://www.arduino.cc/",
  },
  {
    img: "/Img/GitHub.png",
    title: "GitHub",
    width: "200",
    height: "200",
    link: "https://github.com/A8222838/A06.git",
  },
  {
    img: "/Img/MUI.png",
    title: "MUI",
    width: "200",
    height: "200",
    link: "https://mui.com/zh/",
  },
  {
    img: "/Img/Next_JS.png",
    title: "NextJS",
    wwidth: "200",
    height: "200",
    link: "https://nextjs.org/",
  },
  {
    img: "/Img/react-bootstrap.png",
    title: "ReactBootstrap",
    width: "200",
    height: "200",
    link: "https://react-bootstrap.github.io/",
  },
  {
    img: "/Img/React.png",
    title: "React",
    width: "200",
    height: "200",
    link: "https://zh-hant.reactjs.org/",
  },
];
