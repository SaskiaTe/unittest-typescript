export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiplied(faktorA: number, faktorB: number): number {
  return faktorA * faktorB;
}

export function divide(dividient: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division durch 0 ist nicht erlaubt");
  }
  return dividient / divisor;
}
