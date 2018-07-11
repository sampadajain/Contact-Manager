# Contact Manager

Contact Manager is a simple backbonejs application. This can be used to read contancts, Delete(inactivate contacts), edit and add new contacts.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

To view this SPA of contanct manager download zip or clone this git project on your local machine and open index.html page.



### Installing

A step by step series of examples that tell you how to get a development environment running
Clone or Download this app and run index.html page. You will see a screen like below:


For running Unit test cases install Karma. Karma runs on Node.js and is available as an NPM package.

1. Install NodeJS(6.11.1 or higher).
2. Install Karma: ``$ npm install karma --save-dev``
3. Install Karma plugins:``$ npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev``
4. Start Karma: Go to tests folder and execute: ``karma start``

This will run the unit testcases.

For Acceptance testing using Codeceptjs follow below setps:

```
01. Make sure NodeJS is 6.11.1 or Higher (node --version)
02. npm install -g git+https://github.com/Codeception/CodeceptJS.git
03. npm install -g webdriverio
04. npm install -g selenium-standalone
05. Install Java 8 on your setup.
06. selenium-standalone install
07. selenium-standalone start
08. npm install -g request
10. npm install -g fs
11. SET NODE_PATH environment variable to your coressponding global 'node_modules' path
```


## Running the tests

Start Karma: Go to tests folder(cd app/tests/unit/) and execute: ``karma start``

## Deployment

Currently this is a single page application which doesn't connect to server. Once I develop this end-to-end with serve APIs will update this section.

## Built With

* [backbonejs](http://backbonejs.org/) - The web framework used
* [underscorejs](https://underscorejs.org/) - Dependency of backbonejs
* [jQuery](https://jquery.com/) - Dependency of backbonejs
* [Bootstrap](https://getbootstrap.com/) - Used to generate responsive UI
* [Karma](https://karma-runner.github.io/2.0/index.html)- Used to run automated unit test cases
 

## Authors

* **Sampada Jain** - *Initial work*


## License

MIT License. See license for more details.


