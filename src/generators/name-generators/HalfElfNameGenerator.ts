import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'Al', 'Aro', 'Bar', 'Bel', 'Cor', 'Cra', 'Dav', 'Dor', 'Eir', 'El', 'Fal', 'Fril', 'Gaer', 'Gra', 'Hal', 'Hor', 'Ian', 'Ilo', 'Jam', 'Kev', 'Kri', 'Leo', 'Lor', 'Mar', 'Mei', 'Nil', 'Nor', 'Ori', 'Os', 'Pan', 'Pet', 'Quo', 'Raf', 'Ri', 'Sar', 'Syl', 'Tra', 'Tyr', 'Uan', 'Ul', 'Van', 'Vic', 'Wal', 'Wil', 'Xan', 'Xav', 'Yen', 'Yor', 'Zan', 'Zyl' ];
var suffixes = [ 'avor', 'ben', 'borin', 'coril', 'craes', 'deyr', 'dithas', 'elor', 'enas', 'faelor', 'faerd', 'finas', 'fyr', 'gotin', 'gretor', 'homin', 'horn', 'kas', 'koris', 'lamir', 'lanann', 'lumin', 'minar', 'morn', 'nan', 'neak', 'neiros', 'orin', 'ovar', 'parin', 'phanis', 'qarim', 'qinor', 'reak', 'ril', 'ros', 'sariph', 'staer', 'torin', 'tumil', 'valor', 'voril', 'warith', 'word', 'xian', 'xiron', 'yeras', 'ynor', 'zaphir', 'zaren' ];
var femalePrefixes = [ 'Alu', 'Aly', 'Ar', 'Bren', 'Byn', 'Car', 'Co', 'Dar', 'Del', 'El', 'Eli', 'Fae', 'Fha', 'Gal', 'Gif', 'Haly', 'Ho', 'Ile', 'Iro', 'Jen', 'Jil', 'Kri', 'Kys', 'Les', 'Lora', 'Ma', 'Mar', 'Mare', 'Neri', 'Nor', 'Ol', 'Ophi', 'Phaye', 'Pri', 'Qi', 'Que', 'Rel', 'Res', 'Sael', 'Saf', 'Syl', 'Ther', 'Tyl', 'Una', 'Uri', 'Ven', 'Vyl', 'Win', 'Wol', 'Xil', 'Xyr', 'Yes', 'Yll', 'Zel', 'Zin' ];
var femaleSuffixes = [ 'aerys', 'anys', 'bellis', 'bwynn', 'cerys', 'charis', 'diane', 'dove', 'elor', 'enyphe', 'faen', 'fine', 'galyn', 'gwynn', 'hana', 'hophe', 'kaen', 'kilia', 'lahne', 'lynn', 'mae', 'malis', 'mythe', 'nalore', 'noa', 'nys', 'ona', 'phira', 'pisys', 'qarin', 'qwyn', 'rila', 'rora', 'seris', 'stine', 'sys', 'thana', 'theris', 'tihne', 'trana', 'viel', 'vyre', 'walyn', 'waris', 'xaris', 'xipha', 'yaries', 'yra', 'zenya', 'zira' ];

export class HalfElfNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        if (sexName === SexName.Female) {
            return randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return randomFromList(prefixes) + randomFromList(suffixes);
    }
}
