export function random(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
}

export function randomFromList<T>(list: T[]): T {
    return list[random(0, list.length)];
}

export function randomFromEnum<T>(anEnum: T): T[keyof T] {
    const values = Object.values(anEnum);
    return randomFromList(values) as unknown as T[keyof T];
}
