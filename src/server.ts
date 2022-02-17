import { app } from "./app"
import database from "./database/db"

const port = 3333

const server = app.listen(port, async () => {
    await database.sync();
})

process.on('SIGINT', () => {
    server.close()
    console.log('App closed')
})