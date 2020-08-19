// add solution here
function theBeatlesPlay(musicianArray, instrumentArray) {
  // empty list to put the full strings in
  var musiciansPlay = [];
  // for loop through musicianArray
  for (var i = 0; i < musicianArray.length; i++) {
    musiciansPlay.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }

  // return the final string of what musicians play
  return musiciansPlay;
}
// create johnLennonFacts function that takes an array of facts
function johnLennonFacts(facts) {
  // create while loop that adds !!! to end of every fact
  let i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i += 1;
  }
  // return array of strings with added exclamation points
  return facts;
}
