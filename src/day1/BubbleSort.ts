export default function bubble_sort(arr: number[]): void {
    let limit = arr.length - 1;
    while (limit !== 1) {
        for (let i = 0; i < limit; i++) {
            const current = arr[i];
            const next = arr[i + 1];
            if (current > next) {
                arr[i + 1] = current;
                arr[i] = next;
            }
        }
        limit--;
    }
}
