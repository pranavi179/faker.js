
/** 
*
* @namespace faker.book
*/
var Book = function(faker) 
{
var self = this;

/** 
* BOOK NAME
* @method faker.book.bookName
*/
self.bookName = function()
{
        return faker.random.arrayElement(faker.definitions.book.bookName);
};
/**
* 
*bookauthor
*
* @method faker.book.bookAuthor
*/
self.bookAuthor = function()
{
	return faker.random.arrayElement(faker.definitions.book.bookAuthor);
};
/** 
*
*book publisher name
*
* @method faker.book.bookPublisher
*/
self.bookPublisher = function()
{
	return faker.random.arrayElement(faker.definitions.book.bookPublisher);
};
/**
   * price
   *
   * @method faker.book.price
   * @param {number} min
   * @param {number} max
   * @param {number} dec
   * @param {string} symbol
   *
   * @return {string}
   */
  self.price = function(min, max, dec, symbol) {
      min = min || 1;
      max = max || 1000;
      dec = dec === undefined ? 2 : dec;
      symbol = symbol || '';

      if (min < 0 || max < 0) {
          return symbol + 0.00;
      }

      var randValue = faker.random.number({ max: max, min: min });

      return symbol + (Math.round(randValue * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);
  };
return self;
};

module['exports'] = Book;


