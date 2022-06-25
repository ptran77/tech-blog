# Tech Blog

## Description

The application is a CMS-style blog site where developers can publish their blog posts and comment on other developers' post. The site is build following the MVC paradigm, using Handlebars.js (templating language), Sequelize (ORM), express-session for authentication.

## Table Of Content

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Page Link](#page-link)
- [Questions](#questions)

## Installation

To setup the site from your own computer:

- Clone the respiratory from https://github.com/ptran77/tech-blog
- run 'npm i' to install all necessary packages
- create an '.env' with DB_NAME to 'tech_blog_db', DB_USER to your mySQL user, and BD_PW to your mySQL password
- use mysql and enter 'source db/schema.sql' to setup the database and tables
- to set up seeds, run 'npm run seed'

## Usage

Either go the link https://pt-tech-blog-2022.herokuapp.com/
or run 'npm start' on your computer to use the application.

In the app:

- first signup/login with an username and password under the login tab
- click on any existing posts in the homepage to view a single post or write a comment
- click on the dashboard to see a list of your existing posts
- from the dashboard you can click on one of your posts to edit/delete or you can click new post to create a new post

## Screenshot

## Page Link

Link: https://pt-tech-blog-2022.herokuapp.com/;

## Questions

Github: [ptran77](https://github.com/ptran77)

[Portfolio](https://ptran77.github.io/professional-portfolio/)

For any questions, contact me at pettran866@gmail.com
