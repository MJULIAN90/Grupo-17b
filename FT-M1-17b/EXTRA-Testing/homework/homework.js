const layout = [
  [
    { type: 'VIP', booked: false },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: false },
  ],
  [
    { type: 'NORMAL', booked: false },
    { type: 'VIP', booked: true },
    { type: 'VIP', booked: false },
    { type: 'NORMAL', booked: false },
  ],
  [
    { type: 'NORMAL', booked: false },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: false },
  ],
  [
    { type: 'ECONOMIC', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'NORMAL', booked: true },
    { type: 'ECONOMIC', booked: false },
  ],
  [
    { type: 'ECONOMIC', booked: false },
    { type: 'ECONOMIC', booked: true },
    { type: 'ECONOMIC', booked: false },
    { type: 'ECONOMIC', booked: false },
  ],
];
function checkSeatStatus (row, number) {
  if (typeof row !== "string" ) {
    throw new Error('First parameter is not a string');
  }

  if (typeof number !== "number" ) {
    throw new Error('Second parameter is not a number');
  }

  // Opcion 1
  // getRowNumber('A') => 0
  // return layout[getRowNumber(row)][number].booked

  const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  return seat.booked;


};

function getRowNumber(letter) {
  if (typeof letter !== "string") {
    throw new Error('First parameter is not a string');
  }
  // devuelve el valor unicode de un caracter

  console.log(letter.toUpperCase().charCodeAt(0) - 65);
  return letter.toUpperCase().charCodeAt(0) - 65;
}

function book(row, number) {
  if (checkSeatStatus(row, number)) return `Seat in ${row}${number} already booked`;
  const numberRow = getRowNumber(row);
  const layoutRows = layout[numberRow];
  const seat = layoutRows[number];
  seat.booked = true;
  return `Seat in ${row}${number} successfully booked`
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
};