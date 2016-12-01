// |---------------------------------------------------------------------------------|
// | Capture method calculation:                                                     |
// | a = (3 x HPmax - 2 x HPcurrent) x RATEmodified / ((3 x HPmax), 1) + BONUSstatus |
// |                                                                                 |
// | HPmax        = the total number of hit points a pokemon has                     |
// | HPcurrent    = the number of hit points the pokemon has at the moment           |
// | RATEmodified = the catch rate of the pokemon modified by the ball used. It can  |
// |                no less than 1 and no more than 255                              |
// | BONUSstatus  = 10 for sleep or freeze                                           |
// |                                                                                 |
// | If 3 x HPmax > 255|
// |---------------------------------------------------------------------------------|


// constants
let pokedex = {
  bulbasaur: [50, 14, 45]
};

let balls = {
};

let a = document.getElementById('catchRate');

// variables
var testString = 'string';

a.innerHTML = pokedex.bulbasaur[1];
