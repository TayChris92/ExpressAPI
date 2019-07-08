# ExpressAPI
Restful API Implementation written in NodeJS and Express

This serves as a simple web service which exposes arbitrary user data for use for my Angular frontend which I'll upload later.


Uses the following dependencies:
"body-parser": "^1.19.0",
"dotenv": "^8.0.0",
"express": "^4.17.1",
"mysql": "^2.17.1",
"mysql2": "^1.6.5",
"nodemon": "^1.19.1",
"sequelize": "^5.9.4",
"sqlite3": "^4.0.9"


Currently using sqlite as an embedded DB, might remove the mysql dependencies later when I decide which one I want to stick with.

I had a Restful API implementation written in Java using Spring MVC and Hibernate a while back, but I decided to get my feet wet with Node
and I find that it is a lot easier to get a working web service up and running using express. 

I also wanted to pick up an ORM for the hell of it and so far sequelize has gotten the job done just fine. I can definitely see why people
would want to stick with using SQL but I did find that switching from mysql to an sqlite database took almost no time at all using
sequelize. For my next project I will focus on developing without an ORM just to sharpen my SQL skills.

My experience with node has been positive so far. When comparing it to Java, I can see how some people would consider Java to include a lot of 
boilerplate code. The entire Node project itself actually has very little code(including my data model and route configs) and I can
definitely see myself continuing to use node for future projects.

