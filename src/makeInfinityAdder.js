'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let result = 0;

  const adder = (number) => {
    if(typeof number === 'undefined') {
      const returnVal = result;
      result = 0;
      return returnVal;
    }
    result += number;
    return adder;
  }
  return adder;
}

module.exports = makeInfinityAdder;
