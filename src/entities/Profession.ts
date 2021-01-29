export enum ProfessionName {
    Alchemist = 'Alchemist',
    Blacksmith = 'Blacksmith',
    Miner = 'Miner',
    Chef = 'Chef',
    Merchant = 'Merchant',
    Tailor = 'Tailor',
    Lumberjack = 'Lumberjack',
    Carpenter = 'Carpenter',
    Farmer = 'Farmer',
    Detective = 'Detective',
    Tinker = 'Tinker',
    Scribe = 'Scribe',
    Tamer = 'Tamer',
    Fisherman = 'Fisherman',
    Pickpocket = 'Pickpocket',
}

export enum ProfessionRank {
    NoTitle = 'No title',
    Neophyte = 'Neophyte',
    Apprentice = 'Apprentice',
    Journeyman = 'Journeyman',
    Expert = 'Expert',
    Adept = 'Adept',
    Master = 'Master',
    Grandmaster = 'Grandmaster',
    Elder = 'Elder',
    Legendary = 'Legendary',
}

export const MAX_LEVEL = 120;

export class Profession {
    constructor(
        public readonly name: ProfessionName,
        public readonly level: number
    ) {
    }

    public getRank(): ProfessionRank|undefined {
        const ranks = Object.values(ProfessionRank);

        const result = ranks[Math.floor(ranks.length * this.level / MAX_LEVEL )];
        return result === ProfessionRank.NoTitle ? undefined : result;
    }
}
