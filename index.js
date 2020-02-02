"use strict";

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const generatingHTML = require("./generateHTML.js");

const questions = [
  {
    type: "input",
    message: "Please enter your Github username.",
    name: "name"
  },
  {
    type: "list",
    message: "Choose your profile color.",
    name: "color",
    choices: ["green", "blue", "pink", "red"]
  }
];

const init = () => {
  inquirer.prompt(questions).then(res => {
    const user = res.name;
    const queryURL = `https://api.github.com/users/${user}`;
    let html = generatingHTML.generateHTML(res);
  
    axios.get(queryURL).then(res => {
      let layout = layoutHTML(res);
      html = html + layout;

      fs.writeFile(`${user}.html`, html, err => {
        if (err) {
          return console.log.error(err);
        }
        console.log("Your profile has been created successfully!");
      });
      
      pdf.create(html).toFile(`./${user}.pdf`, err => {
        if (err) return console.error(err);
      });
    }); 
  });
};
init();

const layoutHTML = res => {
  return `
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="photo-header col">
          <img src = ${res.data.avatar_url}, alt="self-photo">
          <h1>Hi!</h1>
          <h2>My name is ${res.data.name}</h2>
          <h3>currently @ ${res.data.company}</h3>
          <div class="links-nav">
          <i class="fas fa-location-arrow"></i><div class="nav-link"> <a href="https://www.google.com/maps/place/${res.data.location}" target="_blank">${res.data.location}</a></div>
          <i class="fab fa-github-alt"></i><div class="nav-link"> <a href=${res.data.html_url} target="_blank">GitHub</a></div>
          <i class="fas fa-tv"></i><div class="nav-link"> <a href=${res.data.blog} target="_blank">Site</a></div>
          </div>
        </div>
    </div>
  </div>

  <main>
    <div class="container">
      <h3 class="col">${res.data.bio}</h3>
        <div class="row">
          <div class="col card">
            <h3>Public Repositories</h3>
            <h4>${res.data.public_repos}</h4>
          </div>
          <div class="col card">
            <h3>Followers</h3>
            <h4>${res.data.followers}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col card">
            <h3>GitHub Stars</h3>
            <h4></h4>
          </div>
            <div class="col card">
            <h3>Following</h3>
            <h4>${res.data.following}</h4>
          </div>
        </div>
    </div>
  </main>
  </body>`;
};