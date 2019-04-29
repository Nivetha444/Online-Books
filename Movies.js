
const Movies = [
    { titile: 'a', year:2018, rating: 4.5 },
    { titile: 'd', year:2018, rating: 4.7 },
    { titile: 'h', year:2017, rating: 4.2 },
    { titile: 's', year:2016, rating: 4.8 }
];

const titles = Movies
 .filter(m => m.year === 2018 && m.rating >= 4)
 .sort((a,b) => a.rating - b.rating)
 .reverse()
 .map(m => m.titile)

 console.log(titles);
