/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function getDomain() {
    let pronoun = ["The", "Our", "By"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let element = [".com", ".net", ".org", ".us"];

    let domainName = [];

    for (let a in pronoun)
      for (let b in adj)
        for (let c in noun)
          for (let d in element)
            domainName.push(
              `${"<li>"}${pronoun[a]}${adj[b]}${noun[c]}${element[d]}`
            );

    document.getElementById("domain").innerHTML = domainName.join("");
  }

  return getDomain();
};
