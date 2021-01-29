import { CharacterGenerator } from './generators/CharacterGenerator';
import { AgeGenerator } from './generators/AgeGenerator';
import { Character } from './entities/Character';
import { ItemGenerator } from './generators/ItemGenerator';

const generator = new CharacterGenerator(
    new AgeGenerator(),
    new ItemGenerator(),
);

const input = process.openStdin();
input.on('data', args => {
    generateAndPrint();
});

generateAndPrint();

function generateAndPrint(): void {
    console.clear();
    printNpc(generator.generate());
}

function printNpc(npc: Character): void {
    console.log();
    console.log('-------------------------------------');
    console.log('Information')
    console.log('-------------------------------------');
    console.log(`${npc.name}, ${npc.race.name}, ${npc.classe.name} lv.${npc.level}`);
    console.log(`${npc.age} years old ${npc.sex}, identified as a ${npc.gender} ${npc.sexuality}`);
    // if (npc.profession !== undefined) {
    //     console.log(`${npc.profession.getRank()} ${npc.profession.name} lv.${npc.profession.level}`);
    // }

    console.log();
    console.log('-------------------------------------');
    console.log('Current Stats')
    console.log('-------------------------------------');
    console.log(`HP: ${npc.calculateHP()}/${npc.calculateHP()}`);
    console.log(`MP: ${npc.calculateMana()}/${npc.calculateMana()}`);
    console.log(`SP: ${npc.calculateStamnia()}/${npc.calculateStamnia()}`);
    console.log(`Armor: ${npc.calculateArmor()}`);
    console.log('-------------------------------------');

    console.log();
    console.log('-------------------------------------');
    console.log('Equipped Items')
    console.log('-------------------------------------');
    npc.equipment.forEach((value => {
        console.log(`${value.slot}: ${value.name}`);
    }));
    console.log('-------------------------------------');

    const attributes = npc.getAttributes();
    console.log();
    console.log('-------------------------------------');
    console.log('Attributes')
    console.log('-------------------------------------');
    console.log(`Strength: ${attributes.strength}`);
    console.log(`Constitution: ${attributes.constitution}`);
    console.log(`Dexterity: ${attributes.dexterity}`);
    console.log(`Charisma: ${attributes.charisma}`);
    console.log(`Intelligence: ${attributes.intelligence}`);
    console.log(`Wisdom: ${attributes.wisdom}`);
    console.log('-------------------------------------');
}
