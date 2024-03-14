import {CSVWriter} from "./index";

interface Payment {
    id: number,
    amount: number,
    to: string,
    notes: string
}

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
    {id: 1, amount: 12, to: 'Zoyd', notes: 'Easy' },
    {id: 2, amount: 32, to: 'Sleepy', notes: 'zZzzZz' },
    {id: 3, amount: 525, to: 'Wakey', notes: 'Omg i am awake, amazing!' },
    {id: 5, amount: 989, to: 'Bobber', notes: 'Bobber bobber!' },
])

paymentWriter.save('./data/payments.csv')