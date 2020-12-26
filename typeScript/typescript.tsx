// 7kyu Descending Order
export function descendingOrder(n: number) {
  const string = n.toString();
  const split = string.split("");
  const map = split.map((n) => {
    return Number(n);
  });
  const sort = map.sort((a, b) => b - a);
  const joint = sort.join("");
  const number = Number(joint);
  return number;
}

// 6kyu which are in?
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1.filter((a1s) => a2.some((a2s) => a2s.search(a1s) >= 0)).sort();
  }
}
