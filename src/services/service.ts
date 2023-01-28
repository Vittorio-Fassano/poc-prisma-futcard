import { Game } from "../types/types.js";
import { erros } from "../errors/genericErros.js";
import { insertGameRepository, getAllGames, updateGameRepository, deleteGameRepository, getGameById, getGameByStadium }
  from "../repositories/repository.js";

async function postGame(game: Game) {
  const insGame = await insertGameRepository(game);
  return insGame;
}

// async function getGames(game: Game) {
//   const { stadium } = game;
//   try {
//     if (stadium) {
//       const gameStadium = await getGameByStadium(stadium);
//       return gameStadium;
//     } else {
//       const games = await getAllGames();
//       return games;
//     }
//   } catch (error) {
//     console.error(error);
//     throw erros();
//   }
// }
async function getGames() {
  const games = await getAllGames();
  return games;
}

async function updateGame(id: number, game: Game) {
  const { teams, result, stadium } = game;
  const updGame = await updateGame(id, game);
  return updGame;
}

async function getGame(id: number) {
  const game = await getGameById(id); 
  return game;
}

async function deleteGame(id: number) {
  const deleteGame = await deleteGameRepository(id);
  return deleteGame;
}

const services = {
  postGame,
  getGames,
  updateGame,
  deleteGame,
  getGame,
};

export default services;