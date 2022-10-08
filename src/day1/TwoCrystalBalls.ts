export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpLength = Math.floor(Math.sqrt(breaks.length));
    let i;
    for (i = jumpLength; i < breaks.length; i = i + jumpLength) {
        if (breaks[i]) break;
    }

    const lastSafePos = i - jumpLength;

    for (let k = lastSafePos; k < i; k++) {
        if (breaks[k]) return k;
    }
    return -1;
}
