const map = (
  value: number,
  sMin: number,
  sMax: number,
  dMin: number,
  dMax: number,
): number => {
  return dMin + ((value - sMin) / (sMax - sMin)) * (dMax - dMin);
};

export { map };
