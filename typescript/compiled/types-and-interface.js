function createBook(title, year) {
    return {
        title: title,
        year: year
    };
}
var myBook = createBook("George", 1984);
console.log(typeof myBook.title);
console.log(typeof myBook.year);
