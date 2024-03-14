"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const paymentWriter = new index_1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 12, to: 'Zoyd', notes: 'Easy' },
    { id: 2, amount: 32, to: 'Sleepy', notes: 'zZzzZz' },
    { id: 3, amount: 525, to: 'Wakey', notes: 'Omg i am awake, amazing!' },
    { id: 5, amount: 989, to: 'Bobber', notes: 'Bobber bobber!' },
]);
paymentWriter.save('./data/payments.csv');
