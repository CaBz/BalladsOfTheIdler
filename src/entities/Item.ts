import { Attributes } from './Attributes';

export class Item {
    constructor(
        public readonly slot: string,
        public readonly name: string,
        public readonly attributes: Attributes,
    ) {
    }
}
