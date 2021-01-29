import { Race } from './Race';
import { Class, ClassName } from './Class';
import { AlignmentName, GenderName, SexName, SexualityName } from '../Enums';
import { Profession } from './Profession';
import { Attributes } from './Attributes';
import { Item } from './Item';
import { ArmorItem } from './ArmorItem';
import { RaceName } from '../data/Races';
import { random, randomFromEnum } from '../utils/Random';

export class Character {
    constructor(
        public readonly level: number,
        private readonly attributes: Attributes,
        public readonly name: string,
        public readonly age: number,
        public readonly sex: SexName,
        public readonly gender: GenderName,
        public readonly sexuality: SexualityName,
        public readonly race: Race,
        public readonly classe: Class,
        public readonly professions: Profession[],
        public readonly equipment: ArmorItem[],
        public readonly inventory: Item[],
    ) {
    }

    public calculateHP(): number {
        return (this.level * 10)
            + (this.getAttributes().constitution * 20);
    }

    public calculateMana(): number {
        return (this.level * 10)
            + (this.getAttributes().intelligence * 20);
    }

    public calculateStamnia(): number {
        return (this.level * 10)
            + (this.getAttributes().dexterity * 20);
    }

    public calculateArmor(): number {
        return Math.floor(this.level / 3)
            + (this.getAttributes().constitution * 2)
            + this.equipment.reduce(((previousValue, currentValue) => previousValue + currentValue.armor), 0);
    }

    public getAttributes(): Attributes {
        let attributes = { ...this.attributes };
        this.equipment.forEach(value => {
            attributes.wisdom += value.attributes.wisdom;
            attributes.strength += value.attributes.strength;
            attributes.charisma += value.attributes.charisma;
            attributes.constitution += value.attributes.constitution;
            attributes.intelligence += value.attributes.intelligence;
            attributes.dexterity += value.attributes.dexterity;
        });

        return attributes;
    }

    public getAlignment(): AlignmentName {

        if (random(0,3) === 0) {
            if (this.race.name === RaceName.Dwarf || this.classe.name === ClassName.Paladin) {
                return AlignmentName.LawfulGood;
            }

            if (this.race.name === RaceName.Gnome) {
                return AlignmentName.NeutralGood;
            }

            if (this.race.name === RaceName.Elf) {
                return AlignmentName.ChaoticGood
            }

            if (this.classe.name === ClassName.Monk || this.classe.name === ClassName.Wizard) {
                return AlignmentName.LawfulNeutral;
            }

            if (this.race.name === RaceName.Human || this.classe.name === ClassName.Druid) {
                return AlignmentName.TrueNeutral;
            }

            if (this.classe.name === ClassName.Barbarian || this.classe.name === ClassName.Bard || this.classe.name === ClassName.Rogue) {
                return AlignmentName.ChaoticNeutral;
            }
        }

        return randomFromEnum(AlignmentName);
    }
}
