import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar.js";
import NBAList from "./components/NBAList.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
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
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title>{currTeam.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Row>
                <p>Team Full Name</p>
              </Row>
              <Row>
                <p>Total games in 2021</p>
              </Row>
              <Row>
                <p>Random game details</p>
              </Row>
              <Row>
                <p>Date</p>
              </Row>
              <Row>
                <p>Home Team</p>
              </Row>
              <Row>
                <p>Home Team Score</p>
              </Row>
              <Row>
                <p>Visitor Team</p>
              </Row>
              <Row>
                <p>Visitor Team Score</p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p>{currTeam.full_name}</p>
              </Row>
              <Row>
                <p>{season.length}</p>
              </Row>
              <Row>
                <br></br>
                <br></br>
              </Row>
              <Row>
                <p>{randomGame.date.substring(0, 10)}</p>
              </Row>
              <Row>
                <p>{randomGame.home_team.name}</p>
              </Row>
              <Row>
                <p>{randomGame.home_team_score}</p>
              </Row>
              <Row>
                <p>{randomGame.visitor_team.name}</p>
              </Row>
              <Row>
                <p>{randomGame.visitor_team_score}</p>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
