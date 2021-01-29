import { Attributes } from '../entities/Attributes';
import { NameGenerator } from '../generators/NameGenerator';
import { DragonbornNameGenerator } from '../generators/name-generators/DragonbornNameGenerator';
import { DwarfNameGenerator } from '../generators/name-generators/DwarfNameGenerator';
import { ElfNameGenerator } from '../generators/name-generators/ElfNameGenerator';
import { GnomeNameGenerator } from '../generators/name-generators/GnomeNameGenerator';
import { HalfOrcNameGenerator } from '../generators/name-generators/HalfOrcNameGenerator';
import { HalfElfNameGenerator } from '../generators/name-generators/HalfElfNameGenerator';
import { HalflingNameGenerator } from '../generators/name-generators/HalflingNameGenerator';
import { TieflingNameGenerator } from '../generators/name-generators/TieflingNameGenerator';
import { HumanNameGenerator } from '../generators/name-generators/HumanNameGenerator';

export enum RaceName {
    Dragonborn = 'Dragonborn',
    Dwarf = 'Dwarf',
    Elf = 'Elf',
    Gnome = 'Gnome',
    HalfElf = 'Half-Elf',
    HalfOrc = 'Half-Orc',
    Halfling = 'Halfling',
    Human = 'Human',
    Tiefling = 'Tiefling',
}

export interface RaceData {
    nameGenerator: NameGenerator;
    minAge: number;
    maxAge: number;
    modifiers: Attributes;
    thumbnails: any;
}

export const Races = new Map<RaceName, RaceData>();

Races.set(RaceName.Dragonborn, {
    nameGenerator: new DragonbornNameGenerator(),
    minAge: 15,
    maxAge: 80,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/361/636327455772826858.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/361/636327455772826858.jpeg',
    },
});

Races.set(RaceName.Dwarf, {
    nameGenerator: new DwarfNameGenerator(),
    minAge: 50,
    maxAge: 350,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/363/636327456259204263.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/364/636327456390157492.jpeg',
    },
});

Races.set(RaceName.Elf, {
    nameGenerator: new ElfNameGenerator(),
    minAge: 100,
    maxAge: 750,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/2488/491/636680394055026157.jpeg',
        female: 'https://www.dndbeyond.com/avatars/316/807/636620993866733375.jpeg',
    },
});

Races.set(RaceName.Gnome, {
    nameGenerator: new GnomeNameGenerator(),
    minAge: 40,
    maxAge: 500,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/375/636327458223897714.jpeg',
        female: 'https://www.dndbeyond.com/avatars/316/811/636620994035528201.jpeg',
    },
});

Races.set(RaceName.HalfElf, {
    nameGenerator: new HalfElfNameGenerator(),
    minAge: 20,
    maxAge: 180,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/381/636327459940259125.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/381/636327459940259125.jpeg',
    },
});

Races.set(RaceName.HalfOrc, {
    nameGenerator: new HalfOrcNameGenerator(),
    minAge: 14,
    maxAge: 75,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/385/636327460616726799.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/385/636327460616726799.jpeg',
    },
});

Races.set(RaceName.Halfling, {
    nameGenerator: new HalflingNameGenerator(),
    minAge: 20,
    maxAge: 250,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/384/636327460414027388.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/383/636327460327748907.jpeg',
    },
});

Races.set(RaceName.Human, {
    nameGenerator: new HumanNameGenerator(),
    minAge: 18,
    maxAge: 100,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/387/636327460929201730.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/386/636327460764467148.jpeg',
    },
});

Races.set(RaceName.Tiefling, {
    nameGenerator: new TieflingNameGenerator(),
    minAge: 18,
    maxAge: 110,
    modifiers: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
    },
    thumbnails: {
        male: 'https://www.dndbeyond.com/avatars/9/388/636327461109911160.jpeg',
        female: 'https://www.dndbeyond.com/avatars/9/388/636327461109911160.jpeg',
    },
});
