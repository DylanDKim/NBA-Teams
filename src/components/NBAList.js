import React from "react";
import Table from "react-bootstrap/Table";

export default function NBAList({ query, teamsList, openModal }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>City</th>
            <th>Abbreviation</th>
            <th>Conference</th>
            <th>Division</th>
          </tr>
        </thead>
        <tbody>
          {teamsList.map(
            (team, i) =>
              (team.full_name.toLowerCase().includes(query.toLowerCase()) ||
                team.city.toLowerCase().includes(query.toLowerCase())) && (
                <tr key={team.id} onClick={() => openModal(team)}>
                  <td>{team.id}</td>
                  <td>{team.city}</td>
                  <td>{team.abbreviation}</td>
                  <td>{team.conference}</td>
                  <td>{team.division}</td>
                </tr>
              )
          )}
        </tbody>
      </Table>
    </>
  );
}
