<a name="readme-top"></a>



<div align="center">
  
  <img src="./src/assets/images/logo.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Leaderboard API Application"</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


<!-- PROJECT DESCRIPTION -->

# 📖 [LEADERBOARD APP'] <a name="about-project"></a>

  **[Leader Board  App]**  The Leaderboard API Application is a powerful and versatile JavaScript application that utilizes REST methods to provide users with the ability to create games, submit scores, and retrieve scores for a selected game. The codebase is structured into various modules, each responsible for specific functionalities within the game. By incorporating cutting-edge technologies such as ES6 modules, Webpack, and the Leaderboard API's RESTful interface, this application offers a comprehensive solution for effectively tracking, displaying, and analyzing scores in an intuitive and efficient manner.
 

## 🛠 Built With <a name="built-with"></a>
<p> This project was built using:
    HTML, CSS and JAVASCRIPT, WEBPACK
</p>

### Tech Stack <a name="tech-stack"></a>

<li> HTML </li>
<li> CSS </li>
<li> Javascript </li>
<li> Webpack </li>
<li> Git </li>
<li> Github </li>
<li> Netlify</li>



<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.w3schools.com/html/">HTML</a></li>
  </ul>
</details>

<details>
  <summary>Styles</summary>
  <ul>
    <li><a href="https://www.w3.org/Style/CSS/Overview.en.html">CSS</a></li>
  </ul>
</details>

<details>
  <summary>Language</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">CSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://github.com/">GIT</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **[HTML & CSS Best practices]**
- **[Add New Game]**
- **[Add User and Score]**
- **[Display Users and Scores ]**
- **[Update Task ]**
- **[Seamless Integration ]**
- **[ES6 Modules ]**
- **[Webpack Bundling ]**
- **[CI and CD Deployment with Netlify]**

### Create Game:
 Users can create new games by specifying a game name. The application utilizes the HTTP POST method to send a request to the Leaderboard API, which generates a unique game ID and stores the game name and ID in the database.

### Submit User Score:
 Users can submit their scores for a selected game by providing their name and score. The application employs the HTTP POST method to send the score data to the Leaderboard API, associating it with the corresponding game ID in the database.

### Retrieve Scores: 
 Users can retrieve scores for a selected game using the HTTP GET method. The application sends a request to the Leaderboard API, which responds with an array of scores sorted in descending order. These scores are then displayed in the user interface.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

### 🚀 Live Demo <a name="live-demo"></a>

> 

- [Live Demo Link](	https://google.com)



<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project  you need the following tools:
- [VS Code ]
- [Git and GitHub ]
- [Webpack Installation ]
- [CI CD Netlify Bot  Instalation]
- [Nodejs ]



### Setup

Clone this repository to your desired folder:
```sh
 cd leaderboard
 git clone git@github.com:alyconr/leaderboard.git
```


### Install

Install this project with:

Lighthouse run
```sh
    npm install -g @lhci/cli@0.7.x
```
Webhint:
```sh
     npm install --save-dev hint@7.x
```
Stylelint:
```sh
     npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```

Eslint
```sh
     npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```
Webpack
```sh
     npm init -y
     npm install webpack webpack-cli --save-dev
```

Webpack Css loader
```sh
     npm install --save-dev style-loader css-loader
```

Webpack html plugin
```sh
     npm install --save-dev html-webpack-plugin
```

Webpack dev server
```sh
     npm install --save-dev webpack-dev-server
```



### Usage

To run locally run the following command:

```sh
    npm run build
    npm run start
```


### Run tests

To run tests, run the following command:


To test the Stylelint linter:
```sh
    npx stylelint "**/*.{css,scss}"
```
To test the Webhint:
```sh
    npx hint .
```
To test the ESLint linter:
```sh
    npx eslint .
```


### Deployment

You can deploy this project using your local enviroment or use Netlify bot to deploy it online.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

JEYSSON CONTRERAS


👤 **Author1**

- GitHub: [@alyconr](https://github.com/alyconr)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jeysson-aly-contreras/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[User Authentication]**
- [ ] **[Sorting and Filtering]**
- [ ] **[Score Analytics]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/alyconr/leaderboard.git/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project please give  one start.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank  God for giving me the strength to carry out this project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](LICENSE.md) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>
