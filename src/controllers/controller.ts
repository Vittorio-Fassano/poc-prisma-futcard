import { Request, Response } from "express";
import services from "../services/service.js";
import { erros } from "../errors/genericErros.js";
import { Game } from "../types/types.js";
import { games } from "@prisma/client";

export async function postGame(req: Request, res: Response) {
  const game = req.body as Game;
  try {
    const insertGame = await services.postGame(game);
    res.status(201).send(insertGame);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send(erros());
    return;
  }
}

// export async function getGames(req: Request, res: Response) {
//   const stadium = req.query as Game;
//   try {
//     const games: games[] = await services.getGames(stadium);
//     res.status(200).send(games);
//     return;
//   } catch (err) {
//     console.error(err);
//     res.sendStatus(500);
//     return;
//   }
// }
export async function getGames(req: Request, res: Response) {
  try {
    const games = await services.getGames();
    res.status(200).send(games);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send(erros());
    return;
  }
}

export async function updateGame(req: Request, res: Response) {
  const gameId = parseInt(req.params.gameId);
  const newGame = req.body as Game;
  try {
    await services.updateGame(gameId, newGame)
    res.sendStatus(200);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).send(erros());
    return;
  }
}

export async function deleteGame(req: Request, res: Response) {
  const gameId = parseInt(req.params.gameId);
  try {
    const deleted = await services.deleteGame(gameId);
    if (deleted === null) {
      return res.sendStatus(404)
    }
    res.sendStatus(200);
    return;
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
    return;
  }
}
