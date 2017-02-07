let names = ['Willow', 'Oak', 'Glen', 'Run', 'Slough'];
let suffixes = ['Dr.', 'St.', 'Ct.', 'Rd.', 'Ave.'];
let sp = ' ';

function shuffled(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array [j];
      array[j] = temp;
  }
  return array[0];
}

let mainCont = document.getElementById('mainCont');

function newName() {
  let a = shuffled(names);
  let b = shuffled(names);
  let c = shuffled(suffixes);
  let z = 0;
  stuff = a + sp + b + sp + c;
  mainCont.innerHTML = stuff;

  while(a != 'Willow' && b != 'Oak' && c != 'Ct.') {
    z++;
    a = shuffled(names);
    b = shuffled(names);
    c = shuffled(suffixes);
    mainCont.innerHTML = stuff;
  }

  console.log('It took you ' + z + ' times to get the correct response');

}
