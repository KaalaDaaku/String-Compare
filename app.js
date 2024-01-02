let country = [];

function addarr() {
  let req = prompt("Enter the function");
  while (true) {
    if (req == 'add') {
      let req2 = prompt("Enter the new country to compare");
      country.push(req2);
      console.log('Task added');
      req = prompt("Enter the request you want to perform");
    } else if (req == 'quit') {
      console.log("Quitting the app");
      break;
    } else {
      console.log("Invalid input");
      req = prompt("Enter the request you want to perform");
    }
  }
  return country;
}

addarr();

function compare(addar) {
  let resultindex = 0;
  for (let i = 0; i < addar.length; i++) {
    let resultlen = country[resultindex].length;
    let curlen = country[i].length;
    if (curlen > resultlen) {
      resultindex = i;
    }
  }
  console.log(`The larger string country is ${country[resultindex]}`);

  return country[resultindex];
}

compare(country);