import { random } from '../utils/Random';
import { RaceName, Races } from '../data/Races';

export class AgeGenerator {
    generate(raceName: RaceName): number {
        if (!Races.has(raceName)) {
            throw new Error(`Age generation for ${raceName} is not configured.`);
        }

        const raceData = Races.get(raceName)!;

        return random(raceData.minAge, raceData.maxAge);
    }
}
