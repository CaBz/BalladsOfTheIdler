import { NameGenerator } from '../NameGenerator';
import { adjectives, animals, colors, uniqueNamesGenerator } from 'unique-names-generator';
import { SexName } from '../../Enums';

export class FakeNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        return uniqueNamesGenerator({
            dictionaries: [ adjectives, animals, colors ],
            style: 'capital',
            length: 2,
            separator: ' ',
        });
    }
}
