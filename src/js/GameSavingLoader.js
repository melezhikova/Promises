import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {

    static load() {
        read().then((response) => {
            console.log(response);
            return json(response);
        }).then((result) => {
            console.log(result);
            console.log(new GameSaving (result));
            return new GameSaving (result);
        }).catch ((error) => {
            throw new Error(error.message);
        });
    }
}