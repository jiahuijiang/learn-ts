interface Book {
    title: string;
}
// Stack together
interface Book {
    year: number;
}

function createBook(title: string, year: number) : Book {
    return {
        title: title,
        year: year
    }
}

const myBook = createBook( "George", 1984)

console.log(typeof myBook.title)
console.log(typeof myBook.year)

