const getTheTitles = function(books) {
    let booksTitles = books.filter(item => "title" in item);

    let titles = booksTitles.map(item => item.title);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
