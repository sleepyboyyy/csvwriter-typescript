"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const playerWriter = new index_1.CSVWriter(['uid', 'username', 'health', 'power', 'mana', 'classType']);
playerWriter.addRows([
    { uid: 1, username: 'Sleepy', health: 250, power: 123, mana: 50, classType: 'Knight' },
    { uid: '2', username: 'Wakey', health: 190, power: 100, mana: 25, classType: 'Assassin' },
    { uid: 22, username: 'Zoyd', health: 300, power: 180, mana: 120, classType: 'Paladin' },
    { uid: 31, username: 'Bobber', health: 110, power: 30, mana: 750, classType: 'Mage' },
]);
playerWriter.save('./data/players.csv');
