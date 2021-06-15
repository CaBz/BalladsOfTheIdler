import { Attributes } from './Attributes';

export enum ItemRarity {
    Common = 'common',
    Uncommon = 'uncommon',
    Rare = 'rare',
    Epic = 'epic',
    Legendary = 'legendary',
    Mythic = 'mythic',
    Unique = 'unique',
}

export class Item {
    constructor(
        public readonly slot: string,
        public readonly name: string,
        public readonly rarity: ItemRarity,
        public readonly attributes: Attributes,
    ) {
    }
}
