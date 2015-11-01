# Crossroads Health Project
In partnership with Crossroads Health in Cincinnati, OH, the University of Cincinnati ACM Chapter is aiming to bring computer-based health screening to individuals in the Cincinnati area. 

## What We’re Doing
Using the questions developed by HealthBegins, a California’s based company that specializes in upstream patient health, we’re building a website that allows patients to easily answer questions about their health. Following the screening, administrators of the clinic can access, filter information, discover the conditions that cause major health issues in the Greater Cincinnati area.

## Technical Side
We want to use the following technologies for our website stack:
- Zurb Foundation
- Grunt and Bower
- Node.js
- MariaDB

## Setting up the Development Environment
### Dependencies
Follow these steps in order to get started:
- Clone this repository
- Install Node.js + NPM on your computer by visiting nodejs.org and following install instructions
- Install Ruby on your computer. Go the the Ruby website and install. Then, from your Terminal,
	- Run: gem install sass
- Install Bower + grunt-cli using npm. From a Terminal, 
	- Run: npm install -g grunt-cli 
	- Run: npm install -g bower
- Set up the project.  From the Terminal,
	- cd to this directory
	- Run: npm install
	- Run: bower install
### Each Time You Make Changes
- From the Terminal,
	- Run: grunt