import { Character } from '../entities/Character';
import { AlignmentName, GenderName, SexName, SexualityName } from '../Enums';
import { Race } from '../entities/Race';
import { Class, ClassName } from '../entities/Class';
import { random, randomFromEnum } from '../utils/Random';
import { MAX_LEVEL, Profession, ProfessionName } from '../entities/Profession';
import { Attributes } from '../entities/Attributes';
import { AgeGenerator } from './AgeGenerator';
import { RaceName, Races } from '../data/Races';
import { Item } from '../entities/Item';
import { ItemGenerator } from './ItemGenerator';
import { ArmorItemSlot } from '../data/Items';
import { ArmorItem } from '../entities/ArmorItem';
import { Classes } from '../data/Classes';

export class CharacterGenerator {
    constructor(
        private readonly ageGenerator: AgeGenerator,
        private readonly itemGenerator: ItemGenerator,
    ) {
    }

    generate(): Character {
        const sex = randomFromEnum(SexName);
        const level = random(1, 100);
        const attributes = <Attributes>{
            charisma: this.sumDiceThrows(6, 4),
            constitution: this.sumDiceThrows(6, 4),
            dexterity: this.sumDiceThrows(6, 4),
            intelligence: this.sumDiceThrows(6, 4),
            strength: this.sumDiceThrows(6, 4),
            wisdom: this.sumDiceThrows(6, 4),
        };

        const raceName = randomFromEnum(RaceName);
        const raceData = Races.get(raceName)!;
        const race = new Race(raceName, raceData.thumbnails[sex.toLowerCase()]);

        const className = randomFromEnum(ClassName);
        const classData = Classes.get(className)!;

        const classe = new Class(className, classData.thumbnail);

        const gender = randomFromEnum(GenderName);
        const age = this.ageGenerator.generate(race.name);
        const sexuality = randomFromEnum(SexualityName);
        const name = raceData.nameGenerator.generate(sex);
        const professions = this.generateProfessions();

        const equipment: ArmorItem[] = [];
        Object.keys(ArmorItemSlot).forEach((slot: string) => {
            equipment.push(this.itemGenerator.generateArmor(slot as ArmorItemSlot));
        });
        const inventory: Item[] = [];

        return new Character(level, attributes, name, age, sex, gender, sexuality, race, classe, professions, equipment, inventory);
    }

    generateProfessions(): Profession[] {
        const result: Profession[] = [];

        Object.values(ProfessionName).forEach((value) => {
            if (random(1, 100) > 90) {
                result.push(new Profession(value, random(1, MAX_LEVEL)));
            }
        });

        return result;
    }

    throwDice(faces: number, times: number): number[] {
        const result = [];

        for (let i=0; i<times; i++) {
            result.push(random(1, faces));
        }

        return result;
    }

    sumDiceThrows(faces: number, times: number): number {
        return this.throwDice(faces, times).reduce(((a, b) => a + b), 0)
    }
}
