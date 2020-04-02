export const filterNews = articles => articles.filter(({ title }) => 
title.toLowerCase().includes('coronavirus' || 'covid-19' || 'covid19' || 
                             'virus' || 'outbreak' || 'pandemic'));