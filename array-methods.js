//////// objects in array /////

const books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", customerScore: 2, isInStock: true},
    { id: 2, title: "Clean Code", author: "Robert Martin", customerScore: 4, isInStock: false},
    { id: 3, title: "The Night Circus", author: "Erin Morgenstern", customerScore: 5, isInStock: true},
    { id: 4, title: "Rivers of London", author: "Ben Aaronovich", customerScore: 3, isInStock: false},
    { id: 5, title: "Crime and Punishment", author: "Fyodr Dostoyevsky", customerScore: 5, isInStock: true},
  ];

// console.log(`The length of the original arrary is: ${books.length}`);
//////////filter///////////
//create a function that takes in a book
// function bookIDCheck(book){
//     return book.id > 3;
// }
//return an items with an id > 5

// const newBooksList = books.filter(bookIDCheck);
// console.log("Here is an array of the filtered books:", newBooksList);

//// return item in list if isInStock is === true
// function stockCheck(book){
//     if (book.isInStock === true){
//         return console.log("This book is in stock:", book);
//     }else{
//         return console.log("Nah we aint got this shit; try amazon:", book);
//     }
// }
//alternaive 
// function stockCheck(book){
//     return book.isInStock === true;
// }
 
// const booksInStock = books.filter(stockCheck);
// console.log(booksInStock);




//use books.filter to create a new array that returns condition set by function above. assign to variable

//////// sort books alphabetically  according to their author///
//need to check the first char of the authors name and sort books array accord


///// for each /////////

//the following lines of code adds a new property for each existing object in an arrary
// use for each to add a key value pair to exsiting array
// we want to add additional information onto each object item in the arrary
// language:"English"


//1. create function that adds the language property to an existing object.


// function addLanguage(book){
//     //creates a new property and a corresponding value
//     book.language = "English";
// }
    //how to add a new key value pair to an exisitng object
//2. use for each method to add new property
//print arrary with new property added on
// books.forEach(addLanguage);
// console.log(books);

///////// MAP ///////

//get name of book and author in a string(?);

//create a function that returns only the title of book in an array
function getTitleAndAuthor (book){
    return[book.title,book.author].join(" by ");
}

const titleAndAuthor = books.map(getTitleAndAuthor);
console.log(titleAndAuthor);
