import { connectionDB } from "../database/db.js";

export async function insertGame(
  teams: string,
  resultLowerCase: string,
  stadium: string
) {
  return connectionDB.query(
    `INSERT INTO games (teams, result, stadium) 
    VALUES ($1, $2, $3);`,
    [teams, resultLowerCase, stadium]
  );
}

export async function getGameByStadium(
  stadium: string
) {
  return connectionDB.query(
    `SELECT * FROM games 
    WHERE stadium LIKE $1;`,
    [`${stadium}%`]); 
}

export async function getAllGames() {
  return connectionDB.query(
    `SELECT * FROM games;`);
}

export async function updateGameRepository(
  teams: string,
  resultLowerCase: string,
  stadium: string,
  id: string
) {
  return connectionDB.query(
    `UPDATE games 
    SET teams = $1, result = $2, stadium = $3 
    WHERE id = $4; `,
    [teams, resultLowerCase, stadium, id]
  );
}

export async function getGameById(id: string) {
  return connectionDB.query(
    `SELECT * FROM games 
    WHERE id = $1;`,
    [id])
}

export async function deleteGameRepository(id: string) {
  return connectionDB.query(
    `DELETE FROM games 
    WHERE id = $1;`,
    [id])
}
