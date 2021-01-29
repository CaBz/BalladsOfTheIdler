import { SexName } from '../Enums';

export interface NameGenerator {
    generate(sexName: SexName): string;
}
