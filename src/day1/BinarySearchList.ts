export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    // this burnt me so hard
    let high = haystack.length;
    let mid;
    while (low < high) {
        mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (needle > value) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return false;
}

// export default function bs_list(haystack: number[], needle: number): boolean {
//     let lo = 0;
//     let hi = haystack.length;
//     do {
//         const m = Math.floor(lo + (hi - lo) / 2);
//         const v = haystack[m];
//         if (v === needle) return true;
//         if (v > needle) {
//             hi = m;
//         } else {
//             lo = m + 1;
//         }
//     } while (lo < hi);
//     return false;
// }
