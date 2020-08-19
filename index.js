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
