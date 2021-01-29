import { random, randomFromEnum } from '../utils/Random';
import { ArmorItemSlot, ItemPrefix, PrefixModifiers } from '../data/Items';
import { ArmorItem } from '../entities/ArmorItem';

export class ItemGenerator {
    generateArmor(slot: ArmorItemSlot, forcedPrefix?: ItemPrefix): ArmorItem {
        const prefix = forcedPrefix || randomFromEnum(ItemPrefix);

        return new ArmorItem(
            slot,
            `${slot} of the ${prefix}`,
            PrefixModifiers.get(prefix)!,
            random(0, 20),
        );
    }
}
