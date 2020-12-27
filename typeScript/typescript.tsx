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

//6kyu Stop gninnipS My sdroW!
export class Kata {
  static spinWords(words: string) {
    return words
      .split(" ")
      .map((w) => {
        if (w.length >= 5) {
          return w.split("").reverse().join("");
        }
        return w;
      })
      .join(" ");
  }
}

//6kyu Duplicate Encoder
export function duplicateEncode(word: string) {
  return word
    .split("")
    .map((l) => {
      if (
        word.split("").filter((b) => b.toLowerCase() === l.toLowerCase())
          .length > 1
      ) {
        return ")";
      }
      return "(";
    })
    .join("");
}

//7kyu Sum of the first nth term of Series
export function SeriesSum(n: number): string {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total = total + 1 / (1 + 3 * i); //total+=(1/(1+(3*i)))
  }
  return total.toFixed(2);
}
