import express from 'express';
import path from 'path';
import { CharacterGenerator } from '../generators/CharacterGenerator';
import { AgeGenerator } from '../generators/AgeGenerator';
import { ItemGenerator } from '../generators/ItemGenerator';
import { Character } from '../entities/Character';
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const generator = new CharacterGenerator(
    new AgeGenerator(),
    new ItemGenerator(),
);

app.get('/generate/:number', (req, res) => {
    const number: number = parseInt(req.params.number);
    const npcs: Character[] = [];
    for (let i=0; i<number; i++) {
        npcs.push(generator.generate());
    }

    res.render('generate', { npcs: npcs });
});


const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    socket.emit('message', {});
});

httpServer.listen(3000, () => {
    console.log(`server started at http://localhost:${3000}`);
});
