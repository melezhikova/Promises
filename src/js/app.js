import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {

  static load() {
    read().then((response) => {
      console.log(response);
      console.log(json);
      json(response);
    }).then((result) => {
      console.log(result);
      //const gameSaving = new GameSaving(result);
      return result;
    }, (error) => {
      throw new Error(error.message);
    });
  }
}

const game = new GameSavingLoader;
GameSavingLoader.load();
