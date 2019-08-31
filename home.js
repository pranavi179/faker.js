var faker = require('faker');
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
console.log(faker.fake("Name:{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));


var randomBook = faker.book.findBook();
var randomAuthor = faker.author.authorName();
console.log(


