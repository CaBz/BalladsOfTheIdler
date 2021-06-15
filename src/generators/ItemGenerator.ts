import { random, randomFromEnum } from '../utils/Random';
import { ArmorItemSlot, ItemPrefix, PrefixModifiers, WeaponItemSlot } from '../data/Items';
import { ArmorItem } from '../entities/ArmorItem';
import { WeaponItem } from '../entities/WeaponItem';
import { ItemRarity } from '../entities/Item';

export class ItemGenerator {
    generateArmor(slot: ArmorItemSlot, forcedPrefix?: ItemPrefix): ArmorItem {
        const prefix = forcedPrefix || randomFromEnum(ItemPrefix);

        return new ArmorItem(
            slot,
            `${slot} of the ${prefix}`,
            randomFromEnum(ItemRarity),
            PrefixModifiers.get(prefix)!,
            random(0, 20),
        );
    }

    generateWeapon(slot: WeaponItemSlot, forcedPrefix?: ItemPrefix): WeaponItem {
        const prefix = forcedPrefix || randomFromEnum(ItemPrefix);

        return new WeaponItem(
            slot,
            `${slot} of the ${prefix}`,
            randomFromEnum(ItemRarity),
            PrefixModifiers.get(prefix)!,
            random(0, 20),
        );
    }
}
