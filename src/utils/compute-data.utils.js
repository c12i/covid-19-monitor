export const computePercentageData = (cases, deaths, recovered) => {
  const activeCases = cases - recovered - deaths;

  const activePercentage = Math.round((activeCases/cases) * 100);
  const deathPercentage = Math.round((deaths/cases) * 100);
  const recoveredPercentage = Math.round((recovered/cases) * 100);

  return [
    ['Active Cases %', activePercentage],
    ['Deaths %', deathPercentage],
    ['Recovered %', recoveredPercentage]
  ];
}