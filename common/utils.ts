export async function findAsync<T>(array: T[], predicate: (element: T) => Promise<boolean>) {
    const promises = array.map(predicate);
    const results = await Promise.all(promises);
    const index = results.findIndex(result => result);
    return array[index];
}