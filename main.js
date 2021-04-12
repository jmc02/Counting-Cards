function sequenceOne() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceOne",cc(2) + cc(3) + cc(4)+ cc(5)+ cc(6)).textContent = result;
  }
  function erase1(clear) {
    document.querySelector("#sequenceOne").textContent = " ";
}


function sequenceTwo() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceTwo",cc(7) + cc(8) + cc(9)).textContent = result;
  }
  function erase2(clear) {
    document.querySelector("#sequenceTwo").textContent = " ";
}

function sequenceThree() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceThree",cc(10) + cc('J') + cc('Q') + cc('K') + cc('A')).textContent = result;
  }
  function erase3(clear) {
    document.querySelector("#sequenceThree").textContent = " ";
}

function sequenceFour() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceFour",cc(3) + cc(7) + cc('Q') + cc(8) + cc('A')).textContent = result;
  }
  function erase4(clear) {
    document.querySelector("#sequenceFour").textContent = " ";
}

function sequenceFive() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceFive",cc(2) + cc('J') + cc(9) + cc(2) + cc(7)).textContent = result;
  }
  function erase5(clear) {
    document.querySelector("#sequenceFive").textContent = " ";
}

function sequenceSix() {
    let count = 0;
    function cc(card) {
      (card > 1 && card < 7) ?
      count ++:
      (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
      count --: null
    result = count + ((count > 0) ? ' Bet' : ' Hold');
    return count;
  }
  document.querySelector("#sequenceSix",cc(2) + cc(2) + cc(10)).textContent = result;
  }
  function erase6(clear) {
    document.querySelector("#sequenceSix").textContent = " ";
}

function sequenceSeven() {
  let count = 0;
  function cc(card) {
    (card > 1 && card < 7) ?
    count ++:
    (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A" ) ?
    count --: null
  result = count + ((count > 0)? ' Bet' : ' Hold');
  return count;
}
document.querySelector("#sequenceSeven",cc(3) + cc(2) + cc("A") + cc(10) + cc("K")).textContent = result;
}
function erase7(clear) {
  document.querySelector("#sequenceSeven").textContent = " ";
}
