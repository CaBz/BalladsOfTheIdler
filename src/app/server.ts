import express from 'express';
import path from 'path';
import { CharacterGenerator } from '../generators/CharacterGenerator';
import { AgeGenerator } from '../generators/AgeGenerator';
import { ItemGenerator } from '../generators/ItemGenerator';
import { Character } from '../entities/Character';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { WeaponItemSlot } from '../data/Items';
import { WeaponItem } from '../entities/WeaponItem';
import { randomFromEnum } from '../utils/Random';

const app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const itemGenerator = new ItemGenerator();
const generator = new CharacterGenerator(
    new AgeGenerator(),
    itemGenerator,
);

app.get('/generate/:number', (req, res) => {
    const number: number = parseInt(req.params.number);
    const npcs: Character[] = [];
    for (let i=0; i<number; i++) {
        npcs.push(generator.generate());
    }

    res.render('generate', { npcs });
});

app.get('/blacksmith/:number', (req, res) => {
    const number: number = parseInt(req.params.number);
    const weapons: WeaponItem[] = [];
    for (let i=0; i<number; i++) {
        weapons.push(itemGenerator.generateWeapon(randomFromEnum(WeaponItemSlot)));
    }
   res.render('blacksmith', { weapons });
});

app.post('/blacksmith', (req, res) => {
   res.header('Content-Type', 'text/json');
   res.send({});
});


const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
    socket.emit('message', {});
});

httpServer.listen(3000, () => {
    console.log(`server started at http://localhost:${3000}`);
});
