const movieQuotes = require("popular-movie-quotes");


// console.log(movieQuotes.getRandomQuote());
// console.log(movieQuotes.getAll());
// console.log(movieQuotes.getQuotesByMovie("some like it hot"));
// console.log(movieQuotes.getQuoteByYear(2006, 2005));

// console.log(movieQuotes.getQuotesByType("anime").getQuotesByYear(1997,1998));

const anime = movieQuotes.getQuotesByType("anime");
let anime2019 = [];
anime2019 = anime.filter(singleAnime => singleAnime.year == 2019)
console.log(anime2019);