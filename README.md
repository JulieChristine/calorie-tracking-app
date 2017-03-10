# calorie-tracking-app
<snippet>
  <content><![CDATA[
# $calorie-tracking-app
A food tracking application. Users are able to log foods they’ve eaten during the day, including details about the meal and its number of calories.

## Installation

If you haven't worked with TypeScript and working in Atom, follow the next few step to setup:
1. $ npm install typescript -g
2. $ apm install atom-typescript

follow the the step underneath to initialize your project: 
To install the backend dependencies:  
1. $ npm install

To install the frontend dependencies:
2. $ bower install 

Install bootstrap:
3. $ bower install bootstrap

## Usage
This application makes it possible to:
Log a food you have eaten by submitting a form with food name, calories and details.
View a list of foods you have logged.
View all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
Edit a food you have submitted - its name, details or calories (in case you decide to pretend your fries were 100 calories instead of 365).

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
]]></content>
  <tabTrigger>readme</tabTrigger>
  
## building your application 
To compile all your files use:
$ gulp build 

To run your development server use:
$ gulp serve 
</snippet>
