export function getAnimationDelay(
  index: number,
  total: number,
  cols: 2 | 3 | 4,
): number {
  const col = index % cols;
  const row = Math.floor(index / cols);
  const itemsPerCol = Math.ceil(total / cols);
  return (col * itemsPerCol + row) * 0.12;
}


