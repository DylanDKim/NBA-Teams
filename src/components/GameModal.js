import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BoldP from "../styles/BoldP.js";

export default function GameModal({
  show,
  setShow,
  currTeam,
  randomGame,
  season,
}) {
  return (
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
              <BoldP>Random game details: </BoldP>
            </Row>
            <Row>
              <BoldP>Date</BoldP>
            </Row>
            <Row>
              <BoldP>Home Team</BoldP>
            </Row>
            <Row>
              <BoldP>Home Team Score</BoldP>
            </Row>
            <Row>
              <BoldP>Visitor Team</BoldP>
            </Row>
            <Row>
              <BoldP>Visitor Team Score</BoldP>
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
              <BoldP>{randomGame.date.substring(0, 10)}</BoldP>
            </Row>
            <Row>
              <BoldP>{randomGame.home_team.name}</BoldP>
            </Row>
            <Row>
              <BoldP>{randomGame.home_team_score}</BoldP>
            </Row>
            <Row>
              <BoldP>{randomGame.visitor_team.name}</BoldP>
            </Row>
            <Row>
              <BoldP>{randomGame.visitor_team_score}</BoldP>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
