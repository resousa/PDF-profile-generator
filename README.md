# PDF-profile-generator


## Table of contents
- [General info](#Info)
- [Technologies](#Technologies)
- [Summary](#Summary)
- [Authors](#Authors)
- [License](#License)

### Info
![profile-generator-demo](https://github.com/resousa/PDF-profile-generator/blob/master/demo.gif?raw=true)

This node based application takes in a GitHub user name and color preference. It then pulls info from the GitHub API and creates an html page and a pdf file. 

### Technologies

Project created with :
- [node.js](https://nodejs.org/en/)

#### npm packages
- [axios](https://www.npmjs.com/package/axios)
- [fs](https://www.npmjs.com/package/fs)
- [html-pdf](https://www.npmjs.com/package/html-pdf)

### Summary

The profile generator takes in user input with node.js. The user must input a GitHub repo and a choose a desired color. The generator then takes info from the GitHub API to create a resume. The resume is created in an HTML and PDF file. the gif above shows the process of inputing information and viewing the HTML page. Below is a picture of the PDF produced.

![profile-generator-demo](https://github.com/resousa/PDF-profile-generator/blob/master/demopdf.PNG?raw=true)

### Authors

- Ryan Sousa

### License

- MIT License Copyright (c) 2019 Ryan Sousa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.