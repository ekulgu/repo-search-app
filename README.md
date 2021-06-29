Repository Search
“Repository Search” is a search respository app that build in react hooks.

Tech
Repository Search uses a number of tech stacks:

[React-Hooks] - Front-end newest tech!
[axios] - Great tool for https request
[Bootstrap] - Awesome UI boilerplate for modern web and responsive apps
[hookrouter] - It is a cool tool for switching between pages
Installation
Repository Search requires Node.js v10+ to run.

Install the dependencies and devDependencies and start the server.

git clone Repository Search
cd Repository Search
npm i
npm start
Go to http://localhost:3000/

CORS
To get around the CORS requests terporarly issues add this url ’https://cors-anywhere.herokuapp.com’ infront of search SEARCH_REPO. It is in Util>Urls.js
eg: ’https://cors-anywhere.herokuapp.com/https://api.github.com/search/repositories’

Or, you can add this chrome extension (Allow CORS: Access-Control-Allow-Origin) to your chrome browser.

License
MIT

