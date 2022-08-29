function question(num, score) {
    if (num == 0) {
    document.getElementById("myHeader").innerHTML = "Category 1: Science";
    document.getElementById("myParagraph").innerHTML = "Who discovered Penicillin?"
    document.getElementById("myButton").innerHTML = "Louis Pasteur";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'red';
    document.getElementById("myButton2").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden= false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden= true;
    document.getElementById("wrong").hidden= true;
    document.getElementById("myButton").style.backgroundColor = '';
    document.getElementById("myButton2").style.backgroundColor = '';
    question(1,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "Alexander Fleming";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden= false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden= true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    score++;
    question(1, score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "Paul Ehrlich";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'red';
    document.getElementById("myButton2").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    document.getElementById("myButton2").style.backgroundColor = '';
    question(1,score);
    };};
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = "Edward Jenner";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'red';
    document.getElementById("myButton2").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden= true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    document.getElementById("myButton2").style.backgroundColor = '';
    question(1,score);
    };};
    } else if (num == 1) {
    document.getElementById("myHeader").innerHTML = "Category 2: History";
    document.getElementById("myParagraph").innerHTML = "Which is not a part of the Central Powers in World War 1?"
    document.getElementById("myButton").innerHTML = "Russia";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton").style.backgroundColor = '';
    score++;
    question(2,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "German Empire";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(2,score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "Austria-Hungary";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(2,score);
    };};
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = "Ottoman Empire";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(2,score);
    };};
    } else if (num == 2) {
      document.getElementById("myHeader").innerHTML = "Category 3: Geography";
    document.getElementById("myParagraph").innerHTML = "Addis Ababa is the capital of what country?"
    document.getElementById("myButton").innerHTML = "Sudan";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'red';
    document.getElementById("myButton3").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton").style.backgroundColor = '';
    document.getElementById("myButton3").style.backgroundColor = '';
    question(3,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "Kenya";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'red';
    document.getElementById("myButton3").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    document.getElementById("myButton3").style.backgroundColor = '';
    question(3,score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "Ethiopia";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    score++;
    question(3,score);
    };};
    document.getElementById("myButton4").hidden= false;
    document.getElementById("myButton4").innerHTML = "Tanzania";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'red';
    document.getElementById("myButton3").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden= false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    document.getElementById("myButton3").style.backgroundColor = '';
    question(3,score);
    };};
    } else if (num == 3) {
      document.getElementById("myHeader").innerHTML = "Category 4: Entertainment";
    document.getElementById("myParagraph").innerHTML = "Which of these movies has won no oscars?"
    document.getElementById("myButton").innerHTML = "Rocky";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'red';
    document.getElementById("myButton4").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton").style.backgroundColor = '';
    document.getElementById("myButton4").style.backgroundColor = '';
    question(4,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "One Flew Over the Cuckoo's Nest";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'red';
    document.getElementById("myButton4").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    document.getElementById("myButton4").style.backgroundColor = '';
    question(4,score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "No Country For Old Men";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'red';
    document.getElementById("myButton4").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    document.getElementById("myButton4").style.backgroundColor = '';
    question(4,score);
    };};
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = "The Good, The Bad And The Ugly";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    score++;
    question(4,score);
    };};
    } else if (num == 4) {
      document.getElementById("myHeader").innerHTML = "Category 5: Sports";
    document.getElementById("myParagraph").innerHTML = "What team has the second most UEFA Championships?"
    document.getElementById("myButton").innerHTML = "AC Milan";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton").style.backgroundColor = '';
    score++;
    question(5,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "Real Madrid";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(5,score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "Bayern Munich";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(5,score);
    };};
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = "Liverpool";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(5,score);
    };};
    } else if (num == 5) {
      document.getElementById("myHeader").innerHTML = "Category 6: Art & Literature";
    document.getElementById("myParagraph").innerHTML = "Which of the below is a Tolstoy novel?"
    document.getElementById("myButton").innerHTML = "War and Peace";
    document.getElementById("myButton").onclick = function () {
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("right").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("right").hidden = true;
    document.getElementById("myButton").style.backgroundColor = '';
    score++;
    question(6,score);
    };};
    document.getElementById("myButton2").hidden = false;
    document.getElementById("myButton2").innerHTML = "Pride and Prejudice";
    document.getElementById("myButton2").onclick = function () {
    document.getElementById("myButton2").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton2").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(6,score);
    };};
    document.getElementById("myButton3").hidden = false;
    document.getElementById("myButton3").innerHTML = "Crime and Punishment";
    document.getElementById("myButton3").onclick = function () {
    document.getElementById("myButton3").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton3").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(6,score);
    };};
    document.getElementById("myButton4").hidden = false;
    document.getElementById("myButton4").innerHTML = "Fathers and Sons";
    document.getElementById("myButton4").onclick = function () {
    document.getElementById("myButton4").style.backgroundColor = 'red';
    document.getElementById("myButton").style.backgroundColor = 'green';
    document.getElementById("wrong").hidden = false;
    document.getElementById("next").hidden = false;
    document.getElementById("next").onclick = function () {
    document.getElementById("next").hidden = true;
    document.getElementById("wrong").hidden = true;
    document.getElementById("myButton4").style.backgroundColor = '';
    document.getElementById("myButton").style.backgroundColor = '';
    question(6,score);
    };};
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