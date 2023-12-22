import expres from 'express';

const app = expres();

app.get('/', (req, res) => {
    // console.log(process.env);
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});

console.log('hello World');