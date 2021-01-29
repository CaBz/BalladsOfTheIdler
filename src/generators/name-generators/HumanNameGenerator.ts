import { NameGenerator } from '../NameGenerator';
import { SexName } from '../../Enums';
import { random, randomFromList } from '../../utils/Random';

/* Calashite */
var nm1 = [ '', '', 'b', 'bh', 'f', 'h', 'j', 'kh', 'm', 'n', 'nh', 'r', 'rh', 's', 'z' ];
var nm2 = [ 'a', 'e', 'u', 'a', 'e', 'u', 'a', 'e', 'u', 'i', 'ei' ];
var nm3 = [ 'b', 'd', 'hm', 'hn', 'hl', 'kh', 'l', 'm', 'rd', 'r', 's', 'sh', 'z' ];
var nm4 = [ 'd', 'm', 'n', 'r' ];
var nm5 = [ '', '', 'c', 'f', 'h', 'j', 'm', 'n', 'r', 's', 'sh', 'y', 'z' ];
var nm6 = [ 'a', 'e', 'u', 'a', 'e', 'u', 'o', 'o', 'i', 'i', 'ei' ];
var nm7 = [ 'd', 'f', 'hn', 'hl', 'hm', 'hr', 'l', 'm', 'n', 'p', 'r', 's', 'sh', 'sm', 'sn', 't', 'v', 'z' ];
var nm8 = [ 'h', 'l' ];

// Surname
var nm9 = [ 'b', 'bh', 'c', 'd', 'dh', 'h', 'j', 'kh', 'm', 'n', 'p', 'r', 'rh', 'sh', 'z' ];
var nm10 = [ 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'a', 'a', 'ei' ];
var nm11 = [ 'd', 'h', 'hr', 'hl', 'k', 'kh', 'l', 'm', 'mm', 'n', 'nn', 'ss', 'st', 'sh' ];
var nm12 = [ '', '', '', '', '', 'd', 'l', 'm', 'n', 'r' ];
// Surname

/* Chondathan */
var nm13 = [ '', 'b', 'br', 'd', 'g', 'gr', 'h', 'm', 'n', 'r', 'st', 't', 'v' ];
var nm14 = [ 'a', 'e', 'i', 'o', 'u' ];
var nm15 = [ '', 'br', 'cr', 'gr', 'kv', 'kr', 'l', 'll', 'ld', 'lv', 'nd', 'ng', 'nk', 'nv', 'rd', 'rg', 'rk', 'rst', 'rv', 'v' ];
var nm16 = [ '', '', '', 'd', 'dd', 'g', 'l', 'lm', 'm', 'n', 'r', 'rk', 'rn' ];
var nm17 = [ '', 'c', 'j', 'jh', 'k', 'l', 'm', 'n', 'r', 's', 'sh', 't' ];
var nm18 = [ 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ee', 'ai', 'ei', 'ie' ];
var nm19 = [ 'ch', 'dr', 'l', 'll', 'lr', 'ldr', 'ls', 'lz', 'n', 'ndr', 'rl', 'r', 'rr', 'rv', 'ss', 'sr', 'sv', 'w', 'z', 'zz', 'zn' ];
var nm20 = [ '', '', '', '', 'h', 'l', 'll', 'n' ];


// Surname
var nm21 = [ 'Axe', 'Glow', 'Blade', 'Blood', 'Bone', 'Cloud', 'Crag', 'Crest', 'Doom', 'Dream', 'Coven', 'Elf', 'Fern', 'Feather', 'Fire', 'Fist', 'Flame', 'Forest', 'Hammer', 'Heart', 'Hell', 'Leaf', 'Light', 'Moon', 'Rage', 'River', 'Rock', 'Shade', 'Shadow', 'Shield', 'Snow', 'Spirit', 'Star', 'Steel', 'Stone', 'Swift', 'Tree', 'Whisper', 'Wind', 'Wolf', 'Wood', 'Gloom', 'Glory', 'Orb', 'Ash', 'Blaze', 'Amber', 'Autumn', 'Barley', 'Battle', 'Bear', 'Black', 'Blue', 'Boulder', 'Bright', 'Bronze', 'Burning', 'Cask', 'Chest', 'Cinder', 'Clan', 'Claw', 'Clear', 'Cliff', 'Cold', 'Common', 'Crystal', 'Dark', 'Dawn', 'Day', 'Dead', 'Death', 'Deep', 'Dew', 'Dirge', 'Distant', 'Down', 'Dragon', 'Dusk', 'Dust', 'Eagle', 'Earth', 'Ember', 'Even', 'Far', 'Flat', 'Flint', 'Fog', 'Fore', 'Four', 'Free', 'Frost', 'Frozen', 'Full', 'Fuse', 'Gold', 'Horse', 'Gore', 'Grand', 'Gray', 'Grass', 'Great', 'Green', 'Grizzly', 'Hallow', 'Hallowed', 'Hard', 'Hawk', 'Haze', 'Heavy', 'Haven', 'High', 'Hill', 'Holy', 'Honor', 'Forest', 'Humble', 'Hydra', 'Ice', 'Iron', 'Keen', 'Laughing', 'Lightning', 'Lion', 'Lone', 'Long', 'Low', 'Luna', 'Marble', 'Meadow', 'Mild', 'Mirth', 'Mist', 'Molten', 'Monster', 'Morning', 'Moss', 'Mountain', 'Moon', 'Mourn', 'Mourning', 'Night', 'Noble', 'Nose', 'Oat', 'Ocean', 'Pale', 'Peace', 'Phoenix', 'Pine', 'Plain', 'Pride', 'Proud', 'Pyre', 'Rain', 'Rapid', 'Raven', 'Red', 'Regal', 'Rich', 'Rose', 'Rough', 'Rumble', 'Rune', 'Sacred', 'Sage', 'Saur', 'Sea', 'Serpent', 'Sharp', 'Silent', 'Silver', 'Simple', 'Single', 'Skull', 'Sky', 'Slate', 'Smart', 'Snake', 'Soft', 'Solid', 'Spider', 'Spring', 'Stag', 'Star', 'Stern', 'Still', 'Storm', 'Stout', 'Strong', 'Summer', 'Sun', 'Tall', 'Three', 'Thunder', 'Titan', 'True', 'Truth', 'Marsh', 'Tusk', 'Twilight', 'Two', 'Void', 'War', 'Wheat', 'Whit', 'White', 'Wild', 'Winter', 'Wise', 'Wyvern', 'Young', 'Alpen', 'Crest', 'Crow', 'Fallen', 'Farrow', 'Haven', 'Master', 'Nether', 'Nickle', 'Raven', 'River', 'Stone', 'Tarren', 'Terra', 'Water', 'Willow', 'Wooden' ];
var nm22 = [ 'axe', 'glow', 'beam', 'blade', 'blood', 'bone', 'cloud', 'dane', 'crag', 'crest', 'doom', 'dream', 'feather', 'fire', 'fist', 'flame', 'forest', 'hammer', 'heart', 'hell', 'leaf', 'light', 'moon', 'rage', 'river', 'rock', 'shade', 'claw', 'shadow', 'shield', 'snow', 'spirit', 'star', 'steel', 'stone', 'swift', 'tree', 'whisper', 'wind', 'wolf', 'wood', 'gloom', 'glory', 'orb', 'ash', 'blaze', 'arm', 'arrow', 'bane', 'bash', 'basher', 'beard', 'belly', 'bend', 'bender', 'binder', 'bleeder', 'blight', 'bloom', 'blossom', 'blower', 'glade', 'bluff', 'bough', 'bow', 'brace', 'braid', 'branch', 'brand', 'breaker', 'breath', 'breeze', 'brew', 'bringer', 'brook', 'brow', 'caller', 'chaser', 'reaper', 'chewer', 'cleaver', 'creek', 'crusher', 'cut', 'cutter', 'dancer', 'dew', 'down', 'draft', 'dreamer', 'drifter', 'dust', 'eye', 'eyes', 'fall', 'fang', 'flare', 'flaw', 'flayer', 'flow', 'follower', 'flower', 'force', 'forge', 'fury', 'gaze', 'gazer', 'gem', 'gleam', 'glide', 'grain', 'grip', 'grove', 'guard', 'gust', 'hair', 'hand', 'helm', 'hide', 'horn', 'hunter', 'jumper', 'keep', 'keeper', 'killer', 'lance', 'lash', 'less', 'mane', 'mantle', 'mark', 'maul', 'maw', 'might', 'more', 'mourn', 'oak', 'ore', 'peak', 'pelt', 'pike', 'punch', 'reaver', 'rider', 'ridge', 'ripper', 'roar', 'run', 'runner', 'scar', 'scream', 'scribe', 'seeker', 'shaper', 'shard', 'shot', 'shout', 'singer', 'sky', 'slayer', 'snarl', 'snout', 'soar', 'song', 'sorrow', 'spark', 'spear', 'spell', 'spire', 'splitter', 'sprinter', 'stalker', 'steam', 'stream', 'strength', 'stride', 'strider', 'strike', 'striker', 'sun', 'surge', 'sword', 'sworn', 'tail', 'taker', 'talon', 'thorn', 'tide', 'toe', 'track', 'trap', 'trapper', 'vale', 'valor', 'vigor', 'walker', 'ward', 'watcher', 'water', 'weaver', 'whirl', 'whisk', 'winds', 'wing', 'woods', 'wound', 'brooke', 'fall', 'fallow', 'horn', 'root', 'shine', 'swallow', 'thorne', 'willow', 'wood' ];
// Surname

/* Damaran */
var nm23 = [ '', '', 'b', 'br', 'f', 'g', 'gl', 'gr', 'h', 'k', 'm', 'n', 'p', 'r', 's', 'v' ];
var nm24 = [ 'a', 'e', 'i', 'o' ];
var nm25 = [ 'b', 'br', 'd', 'dr', 'dg', 'g', 'gr', 'r', 'rg', 'rd', 'rv', 's', 'v', 'z' ];
var nm26 = [ 'f', 'l', 'm', 'n', 'r' ];
var nm27 = [ 'c', 'ch', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'v', 'z' ];
var nm28 = [ 'h', 'hn', 'hr', 'l', 'lm', 'lr', 'ln', 'n', 'nn', 'r', 'rn', 'rl', 'rm', 't', 'th', 'thr', 'z' ];
var nm29 = [ '', '', '', '', '', '', 'h', 'l', 'n', 's' ];

// Surname
var nm30 = [ 'b', 'ch', 'd', 'gr', 'gl', 'k', 'm', 'n', 'r', 's', 'sh', 'st', 'v' ];
var nm31 = [ 'a', 'e', 'i', 'o', 'u' ];
var nm32 = [ 'd', 'dr', 'k', 'kr', 'kn', 'l', 'm', 'n', 'r', 'rg', 'rk', 'rn', 'rd', 'v', 'vr', 'z' ];
var nm33 = [ 'dz', 'g', 'n', 'rsk', 'sk', 'tsk', 'v', 'z' ];
// Surname


/* Illuskan */
var nm34 = [ '', '', '', 'bl', 'br', 'fr', 'g', 'gr', 'l', 'm', 'r', 'st', 'str', 't', 'tr', 'v', 'z' ];
var nm35 = [ 'a', 'e', 'o', 'u' ];
var nm36 = [ 'ck', 'dr', 'dv', 'gr', 'gn', 'lc', 'ld', 'lv', 'lb', 'm', 'nn', 'nd', 'nv', 'rd', 'rc', 'rk', 'rb' ];
var nm37 = [ 'm', 'n', 'r', 'rth', 'th' ];
var nm38 = [ '', '', 'b', 'c', 'h', 'k', 'l', 'm', 'n', 'r', 's', 'v', 'w', 'z' ];
var nm39 = [ 'fn', 'fl', 'fr', 'g', 'l', 'lg', 'lr', 'm', 'n', 'r', 'rh', 'sh', 'str', 'th', 'thr', 'v', 'vr' ];
var nm40 = [ '', '', '', '', 'y' ];
/* Mulan */
var nm43 = [ 'b', 'd', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'r', 's', 't', 'th', 'v', 'z' ];
var nm44 = [ 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'io', 'ao', 'eo', 'eu', 'ue' ];
var nm45 = [ 'd-k', 'd-v', 'k-d', 'k-v', 'k-m', 'k-r', 'm-k', 'm-z', 'm-v', 'n-v', 'n-z', 'n-d', 'r-k', 'r-v', 'r-z', 't-k', 'r-d', 'h-k', 'h-z', '-k', '-d', '-m', '-n', '-v', '-z', '-t', '-r', 'ch', 'd', 'h', 'hp', 'hk', 'hv', 'j', 'k', 'm', 'n', 'r', 'rh', 't', 'th', 'v', 'z', 'ch', 'd', 'h', 'hp', 'hk', 'hv', 'j', 'k', 'm', 'n', 'r', 'rh', 't', 'th', 'v', 'z', 'ch', 'd', 'h', 'hp', 'hk', 'hv', 'j', 'k', 'm', 'n', 'r', 'rh', 't', 'th', 'v', 'z' ];
var nm46 = [ '', '', 'd', 'f', 'h', 'k', 'n', 'r', 's', 'th', 'z' ];
var nm47 = [ 'c', 'ch', 'f', 'h', 'k', 'l', 'm', 'n', 'r', 's', 't', 'th', 'v', 'z' ];
var nm48 = [ 'ch', 'f', 'fr', 'h', 'l', 'm', 'n', 'ph', 's', 'sh', 'r', 'th', 'z', 'zr', 'zh' ];
var nm49 = [ '', '', '', '', '', '', '', 'h', 's', 'th' ];

// Surname
var nm50 = [ 'b', 'd', 'f', 'h', 'j', 'l', 'm', 'n', 'r', 's', 'v', 'z' ];
var nm51 = [ 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'u', 'a', 'e', 'i', 'o', 'u', 'ue', 'uu' ];
var nm52 = [ 'cr', 'ch', 'hp', 'hk', 'hr', 'j', 'kr', 'kd', 'l', 'lr', 'ldr', 'lt', 'ltr', 'nd', 'nsk', 'nkh', 'nth', 'ndr', 'nkr', 'nz', 'pr', 'pv', 'th', 'thr', 'v', 'vr', 'z', 'zr', 'zd' ];
var nm53 = [ 'b', 'd', 'ft', 'fk', 'hd', 'hr', 'hk', 'k', 'kt', 'ld', 'm', 't' ];
// Surname

/* Rashemi */
var nm54 = [ 'b', 'br', 'd', 'dr', 'f', 'g', 'j', 'k', 'm', 'r', 's', 'sh', 't', 'vl', 'z' ];
var nm55 = [ 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'oo', 'ou', 'au' ];
var nm56 = [ 'd', 'dj', 'j', 'lm', 'ld', 'lv', 'm', 'mz', 'mv', 'n', 'nz', 'nd', 'nr', 'nd', 'r', 'rg', 'rd', 'rl', 'rv', 'rz', 'sl', 'sv', 'sd', 'th', 'tv', 'v', 'z' ];
var nm57 = [ 'c', 'd', 'k', 'r', 's', 'sk', 't' ];
var nm58 = [ '', '', 'd', 'f', 'h', 'l', 'm', 'n', 'r', 's', 'sh', 't', 'th', 'v', 'y', 'z' ];
var nm59 = [ 'a', 'e', 'i', 'u' ];
var nm60 = [ 'ch', 'dr', 'dh', 'f', 'fr', 'gr', 'h', 'ldr', 'lm', 'ln', 'lv', 'lr', 'mm', 'mz', 'mv', 'ndr', 'nr', 'r', 'rr', 'rr', 'rv', 'rs', 'rl', 'v', 'vr', 'v', 'vl' ];
var nm61 = [ '', '', '', '', '', '', '', '', '', '', '', '', 'l', 'n', 's', 'sh', 'th' ];

// Surname
var nm62 = [ '', '', 'ch', 'd', 'g', 'gr', 'h', 'm', 'n', 'r', 'st', 't', 'tr', 'v', 'vr', 'z' ];
var nm63 = [ 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ye', 'ya' ];
var nm64 = [ 'b', 'd', 'dz', 'g', 'k', 'ld', 'lb', 'lm', 'lz', 'm', 'mr', 'mz', 'n', 'nz', 'ng', 'nt', 'r', 'rg', 'rn', 'rk', 'th', 'tr', 'tv', 'v', 'vr', 'vz', 'b', 'd', 'g', 'k', 'm', 'n', 'r', 'v' ];
// Surname

/* Shou */
var nm65 = [ '', '', 'ch', 'f', 'h', 'j', 'l', 'm', 'q', 'sh', 't', 'th', 'w', 'z' ];
var nm66 = [ 'a', 'i', 'e', 'o', 'u', 'ia', 'ui', 'io', 'ie', 'iu' ];
var nm67 = [ '', '', '', 'h', 'm', 'n', 'ng', 'p', 'w', 'y' ];
var nm68 = [ 'b', 'c', 'ch', 'd', 'j', 'l', 'm', 'n', 'p', 'q', 'sh', 't', 'ts', 'x', 'y', 'z' ];
var nm69 = [ 'ai', 'ia', 'ao', 'ei', 'iao', 'ui', 'ua', 'ue' ];

// Surname
var nm70 = [ '', '', '', 'c', 'ch', 'd', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 'sh', 't', 'w', 'x', 'y', 'z' ];
var nm71 = [ 'a', 'i', 'u', 'ai', 'ia', 'iao', 'ue', 'ei', 'ie', 'ua', 'ao' ];
var nm72 = [ '', '', '', 'm', 'n', 'ng', 'y' ];
// Surname

/* Turami */
var nm73 = [ '', '', 'ch', 'cr', 'd', 'gr', 'f', 'fr', 'h', 'm', 'p', 'r', 's', 't', 'v', 'z' ];
var nm74 = [ 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u', 'ai', 'ie', 'ue', 'ea' ];
var nm75 = [ 'b', 'br', 'c', 'dr', 'l', 'ld', 'lb', 'm', 'mb', 'n', 'nr', 'nt', 'nch', 'r', 'rf', 'rv', 'rn', 'rc', 'rd', 'rt', 'st', 'sc', 't', 'v', 'z' ];
var nm76 = [ '', '', 'l', 'n', 'r', 's', 'z' ];
var nm77 = [ '', '', '', 'b', 'd', 'f', 'j', 'l', 'm', 'q', 's', 'v' ];
var nm78 = [ 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'a', 'e', 'i', 'o', 'ui', 'ua', 'ai', 'ia', 'ie', 'ei' ];
var nm79 = [ 'd', 'l', 'lm', 'm', 'n', 'nc', 'nd', 'ndr', 'nt', 'nn', 'r', 'rt', 's', 't', 'tt', 'v' ];
var nm80 = [ '', '', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'm', 'p', 'r', 's', 'v', 'z' ];
var nm81 = [ 'br', 'c', 'dr', 'g', 'h', 'l', 'lb', 'ld', 'm', 'n', 'nd', 'nz', 'r', 'rn', 'rg', 's', 'sc', 'sq', 'st', 'v', 'z' ];
var nm82 = [ '', '', '', '', 'l', 'n', 'r', 's' ];

export class HumanNameGenerator implements NameGenerator {
    generate(sexName: SexName): string {
        const i = random(0, 15);

        let lastName = this.generateLastName(i);
        lastName = lastName[0].toUpperCase() + lastName.substr(1).toLowerCase();

        let firstName = (sexName === SexName.Female) ? this.generateFemaleName(i) : this.generateMaleName(i);
        firstName = firstName[0].toUpperCase() + firstName.substr(1).toLowerCase();

        return `${firstName} ${lastName}`;
    }

    private generateLastName(i: number) {
        if (i < 2) {
            return randomFromList(nm9)
                + randomFromList(nm10)
                + randomFromList(nm11)
                + randomFromList(nm10)
                + randomFromList(nm12);
        }

        if (i < 4) {
            return randomFromList(nm21)
                + randomFromList(nm22);
        }

        if (i === 4) {
            return randomFromList(nm30)
                + randomFromList(nm31)
                + randomFromList(nm33);
        }

        if (i < 6) {
            return randomFromList(nm30)
                + randomFromList(nm31)
                + randomFromList(nm32)
                + randomFromList(nm31)
                + randomFromList(nm33);
        }

        if (i < 8) {
            return randomFromList(nm21)
                + randomFromList(nm22);
        }

        if (i === 8) {
            return randomFromList(nm50)
                + randomFromList(nm51)
                + randomFromList(nm52)
                + randomFromList(nm51)
                + randomFromList(nm52)
                + randomFromList(nm51)
                + randomFromList(nm53);
        }

        if (i < 10) {
            return randomFromList(nm50)
                + randomFromList(nm51)
                + randomFromList(nm52)
                + randomFromList(nm51)
                + randomFromList(nm53);
        }

        if (i === 10) {
            return randomFromList(nm62)
                + randomFromList(nm63)
                + randomFromList(nm64)
                + randomFromList(nm63)
                + randomFromList(nm64)
                + randomFromList(nm63)
                + randomFromList(nm64)
                + randomFromList(nm63);
        }

        if (i < 12) {
            return randomFromList(nm62)
                + randomFromList(nm63)
                + randomFromList(nm64)
                + randomFromList(nm63)
                + randomFromList(nm64)
                + randomFromList(nm63);
        }

        if (i < 14) {
            return randomFromList(nm70)
                + randomFromList(nm71)
                + randomFromList(nm72);
        }

        return randomFromList(nm80)
            + randomFromList(nm14)
            + randomFromList(nm81)
            + randomFromList(nm14)
            + randomFromList(nm81)
            + randomFromList(nm14)
            + randomFromList(nm82);
    }

    private generateFemaleName(i: number) {
        if (i === 0) {
            return randomFromList(nm5)
                + randomFromList(nm6)
                + randomFromList(nm7)
                + randomFromList(nm6)
                + randomFromList(nm7)
                + randomFromList(nm6)
                + randomFromList(nm8);
        }

        if (i < 2) {
            return randomFromList(nm5)
                + randomFromList(nm6)
                + randomFromList(nm7)
                + randomFromList(nm6)
                + randomFromList(nm8);
        }

        if (i === 2) {
            return randomFromList(nm17)
                + randomFromList(nm18)
                + randomFromList(nm19)
                + randomFromList(nm18)
                + randomFromList(nm19)
                + randomFromList(nm18)
                + randomFromList(nm20);
        }

        if (i < 4) {
            return randomFromList(nm17)
                + randomFromList(nm18)
                + randomFromList(nm19)
                + randomFromList(nm18)
                + randomFromList(nm20);
        }

        if (i === 4) {
            return randomFromList(nm27)
                + randomFromList(nm24)
                + randomFromList(nm28)
                + randomFromList(nm24)
                + randomFromList(nm29);
        }

        if (i < 6) {
            return randomFromList(nm27)
                + randomFromList(nm24)
                + randomFromList(nm29);
        }

        if (i === 6) {
            return randomFromList(nm38)
                + randomFromList(nm24)
                + randomFromList(nm39)
                + randomFromList(nm24)
                + randomFromList(nm39)
                + randomFromList(nm24)
                + randomFromList(nm40);
        }

        if (i < 8) {
            return randomFromList(nm38)
                + randomFromList(nm24)
                + randomFromList(nm39)
                + randomFromList(nm24)
                + randomFromList(nm40);
        }

        if (i === 8) {
            return randomFromList(nm47)
                + randomFromList(nm14)
                + randomFromList(nm48)
                + randomFromList(nm14)
                + randomFromList(nm48)
                + randomFromList(nm14)
                + randomFromList(nm49);
        }

        if (i < 10) {
            return randomFromList(nm47)
                + randomFromList(nm14)
                + randomFromList(nm48)
                + randomFromList(nm14)
                + randomFromList(nm49);
        }

        if (i === 10) {
            return randomFromList(nm58)
                + randomFromList(nm59)
                + randomFromList(nm60)
                + randomFromList(nm59)
                + randomFromList(nm60)
                + randomFromList(nm59)
                + randomFromList(nm61);
        }

        if (i < 12) {
            return randomFromList(nm58)
                + randomFromList(nm59)
                + randomFromList(nm60)
                + randomFromList(nm59)
                + randomFromList(nm61);
        }

        if (i === 10) {
            return randomFromList(nm77)
                + randomFromList(nm78)
                + randomFromList(nm79)
                + randomFromList(nm77)
                + randomFromList(nm79)
                + randomFromList(nm77);
        }

        if (i < 14) {
            return randomFromList(nm68)
                + randomFromList(nm69);
        }

        return randomFromList(nm77)
            + randomFromList(nm78)
            + randomFromList(nm79)
            + randomFromList(nm77);
    }

    private generateMaleName(i: number) {
        if (i < 2) {
            return randomFromList(nm1)
                + randomFromList(nm2)
                + randomFromList(nm3)
                + randomFromList(nm2)
                + randomFromList(nm4);
        }

        if (i < 4) {
            return randomFromList(nm13)
                + randomFromList(nm14)
                + randomFromList(nm15)
                + randomFromList(nm14)
                + randomFromList(nm16);
        }

        if (i === 4) {
            return randomFromList(nm23)
                + randomFromList(nm24)
                + randomFromList(nm25)
                + randomFromList(nm24)
                + randomFromList(nm26);
        }

        if (i < 6) {
            return randomFromList(nm23)
                + randomFromList(nm24)
                + randomFromList(nm26);
        }

        if (i === 6) {
            return randomFromList(nm34)
                + randomFromList(nm35)
                + randomFromList(nm36)
                + randomFromList(nm35)
                + randomFromList(nm37);
        }

        if (i < 8) {
            return randomFromList(nm34)
                + randomFromList(nm35)
                + randomFromList(nm37);
        }

        if (i === 8) {
            return randomFromList(nm43)
                + randomFromList(nm44)
                + randomFromList(nm45)
                + randomFromList(nm44)
                + randomFromList(nm45)
                + randomFromList(nm44)
                + randomFromList(nm46);
        }

        if (i < 10) {
            return randomFromList(nm43)
                + randomFromList(nm44)
                + randomFromList(nm45)
                + randomFromList(nm44)
                + randomFromList(nm46);
        }

        if (i === 10) {
            return randomFromList(nm54)
                + randomFromList(nm55)
                + randomFromList(nm56)
                + randomFromList(nm55)
                + randomFromList(nm56)
                + randomFromList(nm55)
                + randomFromList(nm57);
        }

        if (i < 12) {
            return randomFromList(nm54)
                + randomFromList(nm55)
                + randomFromList(nm56)
                + randomFromList(nm55)
                + randomFromList(nm57);
        }

        if (i < 14) {
            return randomFromList(nm65)
                + randomFromList(nm66)
                + randomFromList(nm67);
        }

        if (i === 14) {
            return randomFromList(nm73)
                + randomFromList(nm74)
                + randomFromList(nm75)
                + randomFromList(nm74)
                + randomFromList(nm75)
                + randomFromList(nm74)
                + randomFromList(nm76);
        }

        return randomFromList(nm73)
            + randomFromList(nm74)
            + randomFromList(nm75)
            + randomFromList(nm74)
            + randomFromList(nm76);
    }
}
