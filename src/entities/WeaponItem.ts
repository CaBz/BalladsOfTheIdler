import { Item, ItemRarity } from './Item';
import { Attributes } from './Attributes';
import { ArmorItemSlot, WeaponItemSlot } from '../data/Items';

export class WeaponItem extends Item {
    constructor(
        slot: WeaponItemSlot,
        name: string,
        rarity: ItemRarity,
        attributes: Attributes,
        public readonly attack: number,
    ) {
        super(slot, name, rarity, attributes);
    }
}
