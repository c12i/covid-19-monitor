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

export const computeLineGraphData = (xAxis, cases, deaths, recovered) => {
  const finalData = [];
  for (let x of xAxis) {
    for (let c of cases) {
      for (let d of deaths) {
        for (let r of recovered) {
          finalData.push([x, c, d, r]);
        }
      }
    }
    break;
  }

  return finalData;
}