export const weatherUnitToCelsius = (val?: number) => {
  return val ? Math.ceil(((val - 32) * 5) / 9) : 0;
};
