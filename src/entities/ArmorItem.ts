import { Item, ItemRarity } from './Item';
import { Attributes } from './Attributes';
import { ArmorItemSlot } from '../data/Items';

export class ArmorItem extends Item {
    constructor(
        slot: ArmorItemSlot,
        name: string,
        rarity: ItemRarity,
        attributes: Attributes,
        public readonly armor: number,
    ) {
        super(slot, name, rarity, attributes);
    }
}
