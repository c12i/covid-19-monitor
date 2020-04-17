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

export const computeChartData = country => {
  return [
    ['Cases', country.cases],
    ['Cases Today', country.todayCases],
    ['Deaths', country.deaths],
    ['Deaths Today', country.todayDeaths],
    ['Recovered', country.recovered],
    ['Active Cases', country.active],
    ['Critical Cases', country.critical],
    ['Cases/ Million', country.casesPerOneMillion],
    ['Deaths/ Million', country.deathsPerOneMillion],
    ['Tests/ Million', country.testsPerOneMillion],
  ]
}

export const generateAxisLabel = (value, cases) => {
  if (cases.cases < 1000) {
    return  value;
  } else if(cases.cases > 10000) {
    return  value;
  } else {
    return  value;
  }
}

export const checkMinimumInterval = cases => {
  if (cases.cases < 500) {
    return  100;
  } else if (cases.cases > 500 && cases.cases < 5000) {
    return  200;
  } else if (cases.cases > 5000 && cases.cases < 10000 ) {
    return  500;
  } else if (cases.cases > 50000 && cases.cases < 200000){
    return  1000;
  } else {
    return  10000;
  }
}