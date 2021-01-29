import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'Ad', 'Ae', 'Bal', 'Bei', 'Car', 'Cra', 'Dae', 'Dor', 'El', 'Ela', 'Er', 'Far', 'Fen', 'Gen', 'Glyn', 'Hei', 'Her', 'Ian', 'Ili', 'Kea', 'Kel', 'Leo', 'Lu', 'Mira', 'Mor', 'Nae', 'Nor', 'Olo', 'Oma', 'Pa', 'Per', 'Pet', 'Qi', 'Qin', 'Ralo', 'Ro', 'Sar', 'Syl', 'The', 'Tra', 'Ume', 'Uri', 'Va', 'Vir', 'Waes', 'Wran', 'Yel', 'Yin', 'Zin', 'Zum' ];
var suffixes = [ 'balar', 'beros', 'can', 'ceran', 'dan', 'dithas', 'faren', 'fir', 'geiros', 'golor', 'hice', 'horn', 'jeon', 'jor', 'kas', 'kian', 'lamin', 'lar', 'len', 'maer', 'maris', 'menor', 'myar', 'nan', 'neiros', 'nelis', 'norin', 'peiros', 'petor', 'qen', 'quinal', 'ran', 'ren', 'ric', 'ris', 'ro', 'salor', 'sandoral', 'toris', 'tumal', 'valur', 'ven', 'warin', 'wraek', 'xalim', 'xidor', 'yarus', 'ydark', 'zeiros', 'zumin' ];
var femalePrefixes = [ 'Ad', 'Ara', 'Bi', 'Bry', 'Cai', 'Chae', 'Da', 'Dae', 'Eil', 'En', 'Fa', 'Fae', 'Gil', 'Gre', 'Hele', 'Hola', 'Iar', 'Ina', 'Jo', 'Key', 'Kris', 'Lia', 'Lora', 'Mag', 'Mia', 'Neri', 'Ola', 'Ori', 'Phi', 'Pres', 'Qi', 'Qui', 'Rava', 'Rey', 'Sha', 'Syl', 'Tor', 'Tris', 'Ula', 'Uri', 'Val', 'Ven', 'Wyn', 'Wysa', 'Xil', 'Xyr', 'Yes', 'Ylla', 'Zin', 'Zyl' ];
var femaleSuffixes = [ 'banise', 'bella', 'caryn', 'cyne', 'di', 'dove', 'fiel', 'fina', 'gella', 'gwyn', 'hana', 'harice', 'jyre', 'kalyn', 'krana', 'lana', 'lee', 'leth', 'lynn', 'moira', 'mys', 'na', 'nala', 'phine', 'phyra', 'qirelle', 'ra', 'ralei', 'rel', 'rie', 'rieth', 'rona', 'rora', 'roris', 'satra', 'stina', 'sys', 'thana', 'thyra', 'tris', 'varis', 'vyre', 'wenys', 'wynn', 'xina', 'xisys', 'ynore', 'yra', 'zana', 'zorwyn' ];

export class ElfNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        if (sexName === SexName.Female) {
            return randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return randomFromList(prefixes) + randomFromList(suffixes);
    }
}
