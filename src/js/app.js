import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {

  static load() {
    read().then((response) => {
      json(response);
    }).then((result) => {
      return new GameSaving (result);
    }, (error) => {
      throw new Error(error.message);
    });
  }
}
