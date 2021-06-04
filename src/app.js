/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // function multiplyAll(arr) {
  //   let product = 1;
  //   for (let i = 0; i < arr.length; i++) {
  //     document.getElementById("domain").innerHTML = `${i}${arr[i]}`;
  //     for (let j = 0; j < arr[i].length; j++) {
  //       product *= arr[i][j];
  //     }
  //   }
  //   return product;
  // }

  // multiplyAll([
  //   ["the", "our"],
  //   ["great", "big"],
  //   ["jogger", "racoon"],
  //   [".com", ".net", ".org", ".us"]
  // ]);

  function getDomain() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let element = [".com", ".net", ".org", ".us"];

    for (let a = 0; a < pronoun.length; a++) {
      document.getElementById("domain").innerHTML += pronoun[a];
    }
    // let a = x - 1;
    // pronoun.forEach(a => (document.getElementById("pronoun").innerHTML += a));
    // adj.forEach(b => (document.getElementById("adj").innerHTML += b));
    // noun.forEach(c => (document.getElementById("noun").innerHTML += c));
    // element.forEach(d => (document.getElementById("element").innerHTML += d));
    // pronoun.forEach(a => console.log(a))
    // adj.forEach(b => console.log(b));
    // noun.forEach(c => console.log(c));
    // element.forEach(d => console.log(d));
  }

  // document.getElementById("domain").innerHTML = "text";

  return getDomain();
};
