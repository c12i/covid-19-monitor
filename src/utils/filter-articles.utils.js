export const filterNews = articles => articles.filter(article => 
article.title.toLowerCase().includes('coronavirus' || 'covid-19' || 'covid19' || 'outbreak' || 'pandemic'));