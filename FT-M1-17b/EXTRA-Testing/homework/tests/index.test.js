const {
  checkSeatStatus,
  getRowNumber,
  book,
} = require('../homework')

describe('checkSeatStatus', () => { 
  it('Should return a function named checkSeatStatus', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  it('Should return first params is a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));   })

  it('Should return second params is a number', () => {
    expect(() => checkSeatStatus("a", 'a')).toThrow(new TypeError('Second parameter is not a number'));
  })

  it('Should return false when seat is not booked', () => {
    expect(checkSeatStatus("A", 0)).toBe(false);
  });

  it('Should return true when seat is booked', () => {
    expect(checkSeatStatus("A", 2)).toBe(true);
  });

  it('should return false if the given seat defined by row and column is not booked', () => { 
    expect(checkSeatStatus('E', 3)).toBe(false); 
  });

})

describe('getRowNumber', () => {
  it('Should getRowNumber 0 when is A', () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it('Should getRowNumber 2 when is C', () => {
    expect(getRowNumber("C")).toBe(2);
  });
})

describe('Testing booking', () => {
  it('Should return Seat in A0 successfully booked when seat is booked', () => {
    expect(book("A", 0)).toBe('Seat in A0 successfully booked');
  })

  it('Should return Seat in c1 already  booked when seat is booked', () => {
    expect(book("C", 1)).toBe('Seat in C1 already booked');
  })

})

 