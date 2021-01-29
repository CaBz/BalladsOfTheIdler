import { Item } from './Item';
import { Attributes } from './Attributes';
import { ArmorItemSlot } from '../data/Items';

export class ArmorItem extends Item {
    constructor(
        slot: ArmorItemSlot,
        name: string,
        attributes: Attributes,
        public readonly armor: number,
    ) {
        super(slot, name, attributes);
    }
}
