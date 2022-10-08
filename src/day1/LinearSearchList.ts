export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const value = haystack[i];
        if (value === needle) return true;
    }
    return false;
}
