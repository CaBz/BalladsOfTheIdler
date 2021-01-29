import { RaceName } from '../data/Races';

export class Race {
    constructor(
        public readonly name: RaceName,
        public readonly thumbnail: string,
    ) {
    }
}
