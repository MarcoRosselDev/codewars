export default function findUniq(arr: number[]): number {
  // Do the magic
  arr = arr.sort((a, b) => a - b)
  return arr[0] === arr[1]? arr[arr.length - 1]: arr[0]
}