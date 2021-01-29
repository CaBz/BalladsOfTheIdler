import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { randomFromList } from '../../utils/Random';

var prefixes = [ 'Ali', 'Ar', 'Ba', 'Bal', 'Bel', 'Bha', 'Bren', 'Caer', 'Calu', 'Dur', 'Do', 'Dra', 'Era', 'Faer', 'Fro', 'Gre', 'Ghe', 'Gora', 'He', 'Hi', 'Ior', 'Jin', 'Jar', 'Kil', 'Kriv', 'Lor', 'Lumi', 'Mar', 'Mor', 'Med', 'Nar', 'Nes', 'Na', 'Oti', 'Orla', 'Pri', 'Pa', 'Qel', 'Ravo', 'Ras', 'Rho', 'Sa', 'Sha', 'Sul', 'Taz', 'To', 'Trou', 'Udo', 'Uro', 'Vor', 'Vyu', 'Vrak', 'Wor', 'Wu', 'Wra', 'Wul', 'Xar', 'Yor', 'Zor', 'Zra' ];
var suffixes = [ 'barum', 'bor', 'broth', 'ciar', 'crath', 'daar', 'dhall', 'dorim', 'farn', 'fras', 'gar', 'ghull', 'grax', 'hadur', 'hazar', 'jhan', 'jurn', 'kax', 'kris', 'kul', 'lasar', 'lin', 'mash', 'morn', 'naar', 'prax', 'qiroth', 'qrin', 'qull', 'rakas', 'rash', 'rinn', 'roth', 'sashi', 'seth', 'skan', 'trin', 'turim', 'varax', 'vroth', 'vull', 'warum', 'wunax', 'xan', 'xiros', 'yax', 'ythas', 'zavur', 'zire', 'ziros' ];
var femalePrefixes = [ 'Ari', 'A', 'Bi', 'Bel', 'Cris', 'Ca', 'Drys', 'Da', 'Erli', 'Esh', 'Fae', 'Fen', 'Gur', 'Gri', 'Hin', 'Ha', 'Irly', 'Irie', 'Jes', 'Jo', 'Ka', 'Kel', 'Ko', 'Lilo', 'Lora', 'Mal', 'Mi', 'Na', 'Nes', 'Nys', 'Ori', 'O', 'Ophi', 'Phi', 'Per', 'Qi', 'Quil', 'Rai', 'Rashi', 'So', 'Su', 'Tha', 'Ther', 'Uri', 'Ushi', 'Val', 'Vyra', 'Welsi', 'Wra', 'Xy', 'Xis', 'Ya', 'Yr', 'Zen', 'Zof' ];
var femaleSuffixes = [ 'birith', 'bis', 'bith', 'coria', 'cys', 'dalynn', 'drish', 'drith', 'faeth', 'fyire', 'gil', 'gissa', 'gwen', 'hime', 'hymm', 'karyn', 'kira', 'larys', 'liann', 'lyassa', 'meila', 'myse', 'norae', 'nys', 'patys', 'pora', 'qorel', 'qwen', 'rann', 'riel', 'rina', 'rinn', 'rish', 'rith', 'saadi', 'shann', 'sira', 'thibra', 'thyra', 'vayla', 'vyre', 'vys', 'wophyl', 'wyn', 'xiris', 'xora', 'yassa', 'yries', 'zita', 'zys' ];

var nm5 = [ '', '', '', '', 'c', 'cl', 'cr', 'd', 'dr', 'f', 'g', 'k', 'kl', 'kr', 'l', 'm', 'my', 'n', 'ny', 'pr', 'sh', 't', 'th', 'v', 'y' ];
var nm6 = [ 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'a', 'e', 'i', 'o', 'u', 'aa', 'ia', 'ea', 'ua', 'uu' ];
var nm7 = [ 'c', 'cc', 'ch', 'lm', 'lk', 'lx', 'ld', 'lr', 'ldr', 'lt', 'lth', 'mb', 'mm', 'mp', 'mph', 'mr', 'mt', 'nk', 'nx', 'nc', 'p', 'ph', 'r', 'rd', 'rj', 'rn', 'rrh', 'rth', 'st', 'tht', 'x' ];
var nm8 = [ 'c', 'cm', 'cn', 'd', 'j', 'k', 'km', 'l', 'n', 'nd', 'ndr', 'nk', 'nsht', 'nth', 'r', 's', 'sht', 'shkm', 'st', 't', 'th', 'x' ];
var nm9 = [ 'd', 'j', 'l', 'll', 'm', 'n', 'nd', 'rg', 'r', 'rr', 'rd' ];
var nm10 = [ 'c', 'd', 'k', 'l', 'n', 'r', 's', 'sh', 'th' ];


export class DragonbornNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        let surname = this.generateSurname();
        surname = surname[0].toUpperCase() + surname.substr(1).toLowerCase();

        if (sexName === SexName.Female) {
            return surname + ' ' + randomFromList(femalePrefixes) + randomFromList(femaleSuffixes);
        }
        return surname + ' ' + randomFromList(prefixes) + randomFromList(suffixes);
    }

    generateSurname(): string {
        let ntp = Math.random() * 10 | 0;
        let rnd = Math.random() * nm5.length | 0;
        let rnd2 = Math.random() * nm6.length | 0;
        let rnd3 = Math.random() * nm7.length | 0;
        let rnd4 = Math.random() * nm6.length | 0;
        let rnd5 = Math.random() * nm10.length | 0;
        while (nm7[rnd3] === nm5[rnd] || nm7[rnd3] === nm10[rnd5]) {
            rnd3 = Math.random() * nm7.length | 0;
        }
        if (ntp < 4) {
            return nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm10[rnd5];
        }
        let rnd6 = Math.random() * nm6.length | 0;
        let rnd7 = Math.random() * nm8.length | 0;
        while (nm7[rnd3] === nm8[rnd7] || nm8[rnd7] === nm10[rnd5]) {
            rnd7 = Math.random() * nm8.length | 0;
        }
        if (ntp < 7) {
            return nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd7] + nm6[rnd6] + nm10[rnd5];
        }

        let rnd8 = Math.random() * nm6.length | 0;
        let rnd9 = Math.random() * nm9.length | 0;
        while (nm9[rnd9] === nm8[rnd7] || nm9[rnd9] === nm10[rnd5]) {
            rnd9 = Math.random() * nm9.length | 0;
        }
        return nm5[rnd] + nm6[rnd2] + nm7[rnd3] + nm6[rnd4] + nm8[rnd7] + nm6[rnd6] + nm9[rnd9] + nm6[rnd8] + nm10[rnd5];
    }
}
