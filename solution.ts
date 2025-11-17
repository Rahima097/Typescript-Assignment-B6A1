function formatValue(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return !input;
}

function getLength(data: string | any[]): number {
  if (typeof data === "string") {
    return data.length;
  }
  if (Array.isArray(data)) {
    return data.length;
  }
  return 0;
}


