const railing = 150;
const post = 10;
let min = post * 2 + railing;
let length;
let spare;

// This whole thing could probably be a lot cleaner/nicer/not written by me
// BUT, it was done in about 5 minutes
// No vm
// No php
// No apache
// No vagrant up
// Just quick javascript

const calculateLength = (posts, railings) => {
  if (posts  === 0 && railings === 0) {
      console.log('Leave it out, mate. You\'re having a bubble int ya? Get some posts and' +
          ' railings you mug!');
  } else if (posts < 1) {
      console.log('Not enough posts. Get thee to B&Q');
  } else if (railings < 1) {
      console.log('Not enough railings. Get thee to B&Q');
  } else if (posts === 2 && railings >= 1) {
      console.log(min + 'cm and ' + (railings - 1) + ' railings left over');
  } else {
      if (railings > posts) {
        spare = (posts - 1);
        length = posts * post + spare * railing;
        console.log(length + 'cm and ' + (railings - spare) + ' railings left over');
      } else {
          spare = railings + 1;
          length = spare * post + railings * railing;
          console.log(length + 'cm and ' + (posts - spare) + ' posts left over');
      }
  }
};

calculateLength(0, 4);