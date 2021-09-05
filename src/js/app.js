import GameSavingLoader from './GameSavingLoader';
import GameSaving from './gamesaving';

const gameSaving1 = new GameSaving({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}})
console.log(gameSaving1);

console.log(new GameSavingLoader.load());
