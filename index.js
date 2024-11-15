import express from express;
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! this application is build by ANimesh and it is built for testing.')
})
app.get('/status', (req, res) => {
    res.send('This server is up and running, how are you doing?.')
})
app.get('/bye', (req, res) => {
    res.send('Sad to see you go, but hope to see you again soon..')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})