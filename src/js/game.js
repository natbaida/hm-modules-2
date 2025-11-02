// В модуле game импорт класса Character
import Character from './domain.js';

// Экспорт из модуля game класса Game в качестве дефолтного, 
// класса GameSavingData и функций readGameSaving и writeGameSaving
export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

