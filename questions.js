//questions
const science1 = {q:"Who discovered Penicillin?", a1:"Louis Pasteur", a2:"Alexander Fleming", a3:"Paul Ehrlich", a4:"Edward Jenner"};
const science2 = {q:"What work of Einstein got him his Nobel Prize?", a1:"Speical Relativity", a2:"Photoelectric Effect", a3:"General Relativity", a4:"String Theory"};
const science = [science1, science2];
const history1 = {q:"Which is not a part of the Central Powers in World War 1?", a1:"Russia", a2:"German Empire", a3:"Austria-Hungary", a4:"Ottoman Empire"};
const history2 = {q:"Which country was not neutral during World War 2?", a1:"Finland", a2:"Sweden", a3:"Turkey", a4:"Spain"};
const history = [history1, history2];
const geography1 =  {q:"Addis Ababa is the capital of what country?", a1:"Sudan", a2:"Kenya", a3:"Ethiopia", a4:"Tanzania"};
const geography2 = {q:"Which is not a landlocked country?", a1:"Mongolia", a2:"Liechtenstein", a3:"Angola", a4:"Bolivia"};
const geography = [geography1, geography2];
const entertainment1 = {q:"Which of these movies has won no oscars?", a1:"Rocky", a2:"One Flew Over the Cuckoo's Nest", a3:"No Country For Old Men", a4:"The Good, The Bad And The Ugly"};
const entertainment2 = {q:"Which is not a Martin Scorsese movie?" ,a1:"Taxi Driver", a2:"Good Fellas", a3:"Wolf of Wall Street", a4:"Memento"}
const entertainment = [entertainment1, entertainment2];
const sports1 = {q:"What team has the second most UEFA Championships?", a1:"AC Milan", a2:"Real Madrid", a3:"Bayern Munich", a4:"Liverpool"};
const sports2 = {q:"Which team has Shaquille O'Neal not played for?", a1:"Washington Wizards", a2:"Orlando Magic", a3:"Miami Heat", a4:"Los Angeles Lakers"};
const sports = [sports1, sports2];
const arts1 = {q:"Which of the below is a Tolstoy novel?", a1:"War and Peace", a2:"Pride and Prejudice", a3:"Crime and Punishment", a4:"Fathers and Sons"};
const arts2 = {q:"Who is not an impressionist painter?", a1:"Edvard Munch", a2:"Henri Matiste", a3:"Claude Monet", a4:"Pierre Auguste Renoir"};
const arts = [arts1, arts2];


function question(num, score) {
    if (num == 0) {
    document.getElementById("myHeader").innerHTML = "Category 1: Science";
    let elem = science[Math.floor((Math.random()*science.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
    wrong("myButton", "myButton2", num, score);
    };
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
    right("myButton2", num, score);
    };
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
    wrong("myButton3", "myButton2", num, score);
    };
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
    wrong("myButton4", "myButton2", num, score);
    };
    } else if (num == 1) {
    document.getElementById("myHeader").innerHTML = "Category 2: History";
    let elem = history[Math.floor((Math.random()*history.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
    right("myButton", num, score);
    };
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
    wrong("myButton2", "myButton", num, score);
    };
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
    wrong("myButton3", "myButton", num, score);
    };
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
    wrong("myButton4", "myButton", num, score);
    };
    } else if (num == 2) {
      document.getElementById("myHeader").innerHTML = "Category 3: Geography";
      let elem = geography[Math.floor((Math.random()*geography.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
    wrong("myButton", "myButton3", num, score);
    };
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
    wrong("myButton2", "myButton3", num, score);
    };
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
    right("myButton3", num, score);
    };
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
      wrong("myButton4", "myButton3", num, score);
    };
    } else if (num == 3) {
      document.getElementById("myHeader").innerHTML = "Category 4: Entertainment";
      let elem = entertainment[Math.floor((Math.random()*entertainment.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
      wrong("myButton", "myButton4", num, score);
    };
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
      wrong("myButton2", "myButton4", num, score);
    };
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
      wrong("myButton3", "myButton4", num, score);
    };
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
     right("myButton4", num, score);
    };
    } else if (num == 4) {
      document.getElementById("myHeader").innerHTML = "Category 5: Sports";
      let elem = sports[Math.floor((Math.random()*sports.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
   right("myButton", num, score);  
  };
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
   wrong("myButton2", "myButton", num, score);
    };
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
      wrong("myButton3", "myButton", num, score);
    };
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
      wrong("myButton4", "myButton", num, score);   
    };
    } else if (num == 5) {
      document.getElementById("myHeader").innerHTML = "Category 6: Art & Literature";
      let elem = arts[Math.floor((Math.random()*arts.length))];
    document.getElementById("myParagraph").innerHTML = elem.q;
    document.getElementById("myButton").innerHTML = elem.a1;
    document.getElementById("myButton").onclick = function () {
      right("myButton", num, score); 
    };
    document.getElementById("myButton2").innerHTML = elem.a2;
    document.getElementById("myButton2").onclick = function () {
      wrong("myButton2", "myButton", num, score); 
    };
    document.getElementById("myButton3").innerHTML = elem.a3;
    document.getElementById("myButton3").onclick = function () {
      wrong("myButton3", "myButton", num, score); 
    };
    document.getElementById("myButton4").innerHTML = elem.a4;
    document.getElementById("myButton4").onclick = function () {
      wrong("myButton4", "myButton", num, score); 
    };
    } else if (num == 6) {
      document.getElementById("myParagraph").hidden = true;
      document.getElementById("myButton").hidden = true;
      document.getElementById("myButton2").hidden = true;
      document.getElementById("myButton3").hidden = true;
      document.getElementById("myButton4").hidden = true;
        if (score <= 2) {
          document.getElementById("myHeader").innerHTML = "You did " + score + " out of 6, could be better but it's okay!"
        } else if (score >= 3 && score < 5) {
          document.getElementById("myHeader").innerHTML = "You did " + score + " out of 6, pretty good!"
        } else {
          document.getElementById("myHeader").innerHTML = "You did " + score + " out of 6! You really know your stuff!"
        }
    }

  }

  function wrong(wrongAns, rightAns, num, score) {
    document.getElementById(wrongAns).style.backgroundColor = 'red';
    document.getElementById(rightAns).style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden= false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden= true;
    document.getElementById("wrong").hidden= true;
    document.getElementById(wrongAns).style.backgroundColor = '';
    document.getElementById(rightAns).style.backgroundColor = '';
    num++;
    question(num, score);
  };
}

function right(rightAns, num, score) {
  document.getElementById(rightAns).style.backgroundColor = 'green';
  document.getElementById("right").hidden = false;
  document.getElementById("next").hidden= false;
  document.getElementById("next").onclick = function () {
  document.getElementById("next").hidden= true;
  document.getElementById("right").hidden = true;
  document.getElementById(rightAns).style.backgroundColor = '';
  score++;
  num++;
  question(num ,score);
  }; 
}