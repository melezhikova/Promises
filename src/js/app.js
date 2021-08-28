import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor() {
    this.gameSaving = {};
  }

  load() {
    read().then((response) => {
      const result = json(response);
      this.gameSaving = result;
      return result;
    }, (error) => {
      throw new Error(error.message);
    });
  }
}
