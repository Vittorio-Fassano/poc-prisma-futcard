import { Game } from "../types/types.js";
import { erros } from "../errors/genericErros.js";
import { insertGame, getAllGames, updateGameRepository, deleteGameRepository, getGameById, getGameByStadium } 
from "../repositories/repository.js";

async function postGame(game: Game) {
  const { teams, result, stadium } = game;
  const resultLowerCase = result.toLocaleLowerCase();
  try {
    await insertGame(teams, resultLowerCase, stadium);
  } catch (err) {
    console.error(err);
    throw erros();
  }
}

async function getGames(game: Game) {
  const { stadium } = game;
  try {
    if (stadium) {
      const { rows } = await getGameByStadium(stadium);
      return rows;
    } else {
      const { rows } = await getAllGames();
      return rows;
    }
  } catch (error) {
    console.error(error);
    throw erros();
  }
}

async function updateGame(id: string, game: Game) {
  const { teams, result, stadium } = game;
  const resultLowerCase = result.toLocaleLowerCase();
  try {
    await updateGameRepository(teams, resultLowerCase, stadium, id);
  } catch (error) {
    console.error(error);
    throw erros();
  }
}

async function getGame(id: string) {
  try {
    const { rows } = await getGameById(id);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  } catch (err) {
    console.error(err);
    throw erros();
  }
}

async function deleteGame(id: string) {
  try {
    const exists = await getGame(id);
    if (exists === null) {
      return null;
    }
    const result = (await deleteGameRepository(id)).rows;
    return;
  } catch (err) {
    console.error(err);
    throw erros();
  }
}

const services = {
  postGame,
  getGames,
  updateGame,
  deleteGame,
};

export default services;