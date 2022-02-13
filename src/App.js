import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar.js";
import NBAList from "./components/NBAList.js";
import GameModal from "./components/GameModal.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function App() {
  const [query, setQuery] = useState("");

  const [teamsList, setTeamsList] = useState([]);
  const [show, setShow] = useState(false);
  const [currTeam, setCurrTeam] = useState({ name: "", fullName: "" });
  const [season, setSeason] = useState([
    {
      date: "",
      home_team: { name: "" },
      home_team_score: 0,
      visitor_team: { name: "" },
      visitor_team_score: 0,
    },
  ]);
  const [randomGame, setRandomGame] = useState(season[0]);

  useEffect(() => {
    axios
      .get("/teams")
      .then((data) => setTeamsList(data.data.data))
      .catch((err) => console.log(err));
  }, []);

  function openModal(team) {
    setCurrTeam(team);
    axios
      .get(`/games/${team.id}`)
      .then((data) => setSeason(data.data.data))
      .then(setShow(true))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setRandomGame(season[Math.floor(Math.random() * season.length)]);
  }, [season]);

  useEffect(() => {
    if (season.length > 2) {
      setShow(true);
    }
  }, [randomGame]);

  return (
    <Container>
      <Row md={2}>
        <h1>NBA Teams</h1>
      </Row>
      <Row md={4}>
        <Searchbar query={query} setQuery={setQuery} />
      </Row>
      <Row>
        <NBAList query={query} teamsList={teamsList} openModal={openModal} />
      </Row>
      <GameModal
        show={show}
        setShow={setShow}
        currTeam={currTeam}
        randomGame={randomGame}
        season={season}
      />
    </Container>
  );
}
