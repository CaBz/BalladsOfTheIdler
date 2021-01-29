import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'Aet', 'Ak', 'Am', 'Aran', 'And', 'Ar', 'Ark', 'Bar', 'Car', 'Cas', 'Dam', 'Dhar', 'Eb', 'Ek', 'Er', 'Gar', 'Gu', 'Gue', 'Hor', 'Ia', 'Ka', 'Kai', 'Kar', 'Kil', 'Kos', 'Ky', 'Loke', 'Mal', 'Male', 'Mav', 'Me', 'Mor', 'Neph', 'Oz', 'Ral', 'Re', 'Rol', 'Sal', 'Sha', 'Sir', 'Ska', 'The', 'Thy', 'Thyne', 'Ur', 'Uri', 'Val', 'Xar', 'Zar', 'Zer', 'Zher', 'Zor' ];
var suffixes = [ 'adius', 'akas', 'akos', 'char', 'cis', 'cius', 'dos', 'emon', 'ichar', 'il', 'ilius', 'ira', 'lech', 'lius', 'lyre', 'marir', 'menos', 'meros', 'mir', 'mong', 'mos', 'mus', 'non', 'rai', 'rakas', 'rakir', 'reus', 'rias', 'ris', 'rius', 'ron', 'ros', 'rus', 'rut', 'shoon', 'thor', 'thos', 'thus', 'us', 'venom', 'vir', 'vius', 'xes', 'xik', 'xikas', 'xire', 'xius', 'xus', 'zer', 'zire' ];
var femalePrefixes = [ 'Af', 'Agne', 'Ani', 'Ara', 'Ari', 'Aria', 'Bel', 'Bri', 'Cre', 'Da', 'Di', 'Dim', 'Dor', 'Ea', 'Fri', 'Gri', 'His', 'In', 'Ini', 'Kal', 'Le', 'Lev', 'Lil', 'Ma', 'Mar', 'Mis', 'Mith', 'Na', 'Nat', 'Ne', 'Neth', 'Nith', 'Ori', 'Pes', 'Phe', 'Qu', 'Ri', 'Ro', 'Sa', 'Sar', 'Seiri', 'Sha', 'Val', 'Vel', 'Ya', 'Yora', 'Yu', 'Za', 'Zai', 'Ze' ];
var femaleSuffixes = [ 'bis', 'borys', 'cria', 'cyra', 'dani', 'doris', 'faris', 'firith', 'goria', 'grea', 'hala', 'hiri', 'karia', 'ki', 'laia', 'lia', 'lies', 'lista', 'lith', 'loth', 'lypsis', 'lyvia', 'maia', 'meia', 'mine', 'narei', 'nirith', 'nise', 'phi', 'pione', 'punith', 'qine', 'rali', 'rissa', 'seis', 'solis', 'spira', 'tari', 'tish', 'uphis', 'vari', 'vine', 'wala', 'wure', 'xibis', 'xori', 'yis', 'yola', 'za', 'zes' ];

export class TieflingNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        if (sexName === SexName.Female) {
            return randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return randomFromList(prefixes) + randomFromList(suffixes);
    }
}
