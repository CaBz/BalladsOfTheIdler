import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'An', 'Ar', 'Bar', 'Bel', 'Con', 'Cor', 'Dan', 'Dav', 'El', 'Er', 'Fal', 'Fin', 'Flyn', 'Gar', 'Go', 'Hal', 'Hor', 'Ido', 'Ira', 'Jan', 'Jo', 'Kas', 'Kor', 'La', 'Lin', 'Mar', 'Mer', 'Ne', 'Nor', 'Ori', 'Os', 'Pan', 'Per', 'Pim', 'Quin', 'Quo', 'Ri', 'Ric', 'San', 'Shar', 'Tar', 'Te', 'Ul', 'Uri', 'Val', 'Vin', 'Wen', 'Wil', 'Xan', 'Xo', 'Yar', 'Yen', 'Zal', 'Zen' ];
var suffixes = [ 'ace', 'amin', 'bin', 'bul', 'dak', 'dal', 'der', 'don', 'emin', 'eon', 'fer', 'fire', 'gin', 'hace', 'horn', 'kas', 'kin', 'lan', 'los', 'min', 'mo', 'nad', 'nan', 'ner', 'orin', 'os', 'pher', 'pos', 'ras', 'ret', 'ric', 'rich', 'rin', 'ry', 'ser', 'sire', 'ster', 'ton', 'tran', 'umo', 'ver', 'vias', 'von', 'wan', 'wrick', 'yas', 'yver', 'zin', 'zor', 'zu' ];
var femalePrefixes = [ 'An', 'Ari', 'Bel', 'Bre', 'Cal', 'Chen', 'Dar', 'Dia', 'Ei', 'Eo', 'Eli', 'Era', 'Fay', 'Fen', 'Fro', 'Gel', 'Gra', 'Ha', 'Hil', 'Ida', 'Isa', 'Jay', 'Jil', 'Kel', 'Kith', 'Le', 'Lid', 'Mae', 'Mal', 'Mar', 'Ne', 'Ned', 'Odi', 'Ora', 'Pae', 'Pru', 'Qi', 'Qu', 'Ri', 'Ros', 'Sa', 'Shae', 'Syl', 'Tham', 'Ther', 'Tryn', 'Una', 'Uvi', 'Va', 'Ver', 'Wel', 'Wi', 'Xan', 'Xi', 'Yes', 'Yo', 'Zef', 'Zen' ];
var femaleSuffixes = [ 'alyn', 'ara', 'brix', 'byn', 'caryn', 'cey', 'da', 'dove', 'drey', 'elle', 'eni', 'fice', 'fira', 'grace', 'gwen', 'haly', 'jen', 'kath', 'kis', 'leigh', 'la', 'lie', 'lile', 'lienne', 'lyse', 'mia', 'mita', 'ne', 'na', 'ni', 'nys', 'ola', 'ora', 'phina', 'prys', 'rana', 'ree', 'ri', 'ris', 'sica', 'sira', 'sys', 'tina', 'trix', 'ula', 'vira', 'vyre', 'wyn', 'wyse', 'yola', 'yra', 'zana', 'zira' ];

export class HalflingNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        if (sexName === SexName.Female) {
            return randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return randomFromList(prefixes) + randomFromList(suffixes);
    }
}
