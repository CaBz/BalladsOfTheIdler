import { Attributes } from '../entities/Attributes';

export enum ArmorItemSlot {
    Head = 'Head',
    Chest = 'Chest',
    Shoulder = 'Shoulder',
    Arms = 'Arms',
    Gloves = 'Gloves',
    Belt = 'Belt',
    Cloak = 'Cloak',
    Pants = 'Pants',
    Ring = 'Ring',
    Amulet = 'Amulet',
    Socks = 'Socks',
    Charm = 'Charm',
}

export enum ItemPrefix {
    Wolf = 'Wolf', // Str
    Bear = 'Bear', // Con
    Eagle = 'Eagle', // Dex
    Turtle = 'Turtle', // Wis
    Crow = 'Crow', // Int
    Lion = 'Lion', // Char
}

const attributes = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
}

export const PrefixModifiers: Map<ItemPrefix, Attributes> = new Map();
PrefixModifiers.set(ItemPrefix.Wolf, { ... attributes, strength: 5 });
PrefixModifiers.set(ItemPrefix.Bear, { ... attributes, constitution: 5 });
PrefixModifiers.set(ItemPrefix.Eagle, { ... attributes, constitution: 5 });
PrefixModifiers.set(ItemPrefix.Turtle, { ... attributes, wisdom: 5 });
PrefixModifiers.set(ItemPrefix.Crow, { ... attributes, intelligence: 5 });
PrefixModifiers.set(ItemPrefix.Lion, { ... attributes, charisma: 5 });
