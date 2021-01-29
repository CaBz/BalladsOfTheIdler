import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'Al', 'Ari', 'Bil', 'Bri', 'Cal', 'Cor', 'Dav', 'Dor', 'Eni', 'Er', 'Far', 'Fel', 'Ga', 'Gra', 'His', 'Hor', 'Ian', 'Ipa', 'Je', 'Jor', 'Kas', 'Kel', 'Lan', 'Lo', 'Man', 'Mer', 'Nes', 'Ni', 'Or', 'Oru', 'Pana', 'Po', 'Qua', 'Quo', 'Ras', 'Ron', 'Sa', 'Sal', 'Sin', 'Tan', 'To', 'Tra', 'Um', 'Uri', 'Val', 'Vor', 'War', 'Wil', 'Wre', 'Xal', 'Xo', 'Ye', 'Yos', 'Zan', 'Zil' ];
var suffixes = [ 'bar', 'ben', 'bis', 'corin', 'cryn', 'don', 'dri', 'fan', 'fiz', 'gim', 'grim', 'hik', 'him', 'ji', 'jin', 'kas', 'kur', 'len', 'lin', 'min', 'mop', 'morn', 'nan', 'ner', 'ni', 'pip', 'pos', 'rick', 'ros', 'rug', 'ryn', 'ser', 'ston', 'tix', 'tor', 'ver', 'vyn', 'win', 'wor', 'xif', 'xim', 'ybar', 'yur', 'ziver', 'zu' ];
var femalePrefixes = [ 'Alu', 'Ari', 'Ban', 'Bree', 'Car', 'Cel', 'Daphi', 'Do', 'Eili', 'El', 'Fae', 'Fen', 'Fol', 'Gal', 'Gren', 'Hel', 'Hes', 'Ina', 'Iso', 'Jel', 'Jo', 'Klo', 'Kri', 'Lil', 'Lori', 'Min', 'My', 'Ni', 'Ny', 'Oda', 'Or', 'Phi', 'Pri', 'Qi', 'Que', 'Re', 'Rosi', 'Sa', 'Sel', 'Spi', 'Ta', 'Tifa', 'Tri', 'Ufe', 'Uri', 'Ven', 'Vo', 'Wel', 'Wro', 'Xa', 'Xyro', 'Ylo', 'Yo', 'Zani', 'Zin' ];
var femaleSuffixes = [ 'bi', 'bys', 'celi', 'ci', 'dira', 'dysa', 'fi', 'fyx', 'gani', 'gyra', 'hana', 'hani', 'kasys', 'kini', 'la', 'li', 'lin', 'lys', 'mila', 'miphi', 'myn', 'myra', 'na', 'niana', 'noa', 'nove', 'phina', 'pine', 'qaryn', 'qys', 'rhana', 'roe', 'sany', 'ssa', 'sys', 'tina', 'tra', 'wyn', 'wyse', 'xi', 'xis', 'yaris', 'yore', 'za', 'zyre' ];

export class GnomeNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        if (sexName === SexName.Female) {
            return randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return randomFromList(prefixes) + randomFromList(suffixes);
    }
}
