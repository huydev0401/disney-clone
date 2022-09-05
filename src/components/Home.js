import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase-config";
import { setMovie } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { useEffect } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    const colRef = collection(db, "movies");
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovie({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh -250px);
  top: 72px;
  overflow-x: hidden;
  display: block;
  padding: calc(3.5vw + 5px);
  &::after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
