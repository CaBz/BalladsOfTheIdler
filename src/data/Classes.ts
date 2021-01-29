import { ClassName } from '../entities/Class';

export interface ClassData {
    thumbnail: string,
}

export const Classes = new Map<ClassName, ClassData>();

Classes.set(ClassName.Barbarian, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg',
});

Classes.set(ClassName.Bard, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg',
});

Classes.set(ClassName.Cleric, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg',
});

Classes.set(ClassName.Druid, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg',
});

Classes.set(ClassName.Fighter, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg',
});

Classes.set(ClassName.Monk, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg',
});

Classes.set(ClassName.Paladin, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg',
});

Classes.set(ClassName.Ranger, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg',
});

Classes.set(ClassName.Rogue, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg',
});

Classes.set(ClassName.Sorcerer, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg',
});

Classes.set(ClassName.Warlock, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg',
});

Classes.set(ClassName.Wizard, {
    thumbnail: 'https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg',
});
