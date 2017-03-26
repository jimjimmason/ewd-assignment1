# Assignment 1 - ReactJS app.

Name: James Mason

## Overview.
This app is web app for a fictional sports club.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 + Users can view upcoming events
 + Users can create reviews of equipment / evevts
 + Users can view previously entered reviews
 + Users 
 + Feature 3
 + etc
 + etc

## Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ ReactJS v15.3.0
+ Bootstrap 3
+ create-react-app tool
+ react-router
+ superagent
+ uuid
+ react-form-validate

After cloning repository from github.com all that is reqiured to start project:
+ npm install 
+ npm start
+ Navigate to localhost://3000 in your browser

## Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

Sample Members data
  {
    "id": uuid.v4(),
    "FirstName": "Jim",
    "Surname": "Mason",
    "Address1": "",
    "Address2": "",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0881234567",
    "email": "jmason@eircom.net",
    "DOB" : "1965-10-10",
    "gender" : "male",
    "imageUrl": "",
    "Type": "Administrator",
    "TriathlonIrelandID": "1965IE12431244",
    "Role": "admin"
  }
  
  Sample of Event data:
  {
      "id": uuid.v4(),
      "eventDate": "2017-04-15",
      "eventName": "Nenagh Sprint (poolswim)",
      "eventType": "Triathlon",
      "distance": ["Sprint"],
      "raceSeries": "Nationl Series",
      "ageGroup": ["adults","children"],
      "county": "Tipperary",
      "eventurl": "www.nenaghtriathlon.com",
      "membersCompeting": ["jim mason","fred flinstone"],
      "membersCompetingCount": 2
    }
    
    Sample of Review data:
     posts = [
     {  id: 1 ,
        title : 'Wiggle - online triathlon store',
        link : 'http://www.wiggle.co.uk/triathlon/',
        review: 'Good value for money and Im impressed all round with the service. ',
        username : 'jbloggs',
        comments : ['great'],
        upvotes : 10
      }
      
![][image1]




## App Component Design.

A diagram showing the app's hierarchical component design (see example below). 

![][image2]

## UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (user regeneration and login views, if implemented, can be omitted) . . . . . . . 

![][image3]

## Routing.
. . . . List each route supported and state the associated view . . . . . 
+ /  - root view of app
+ /events - displays list of events
+ /about - dispalys general info
+ /admin - Adminsitrator view - will have ability see multiple views
+ /register - new user can register 
+ /reviews  - displays view of all reviews
+ /reviews/:postId - displays view of particular viee (:postId)



## Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

## Independent learning.
As all these technologies are new to me, I had to do a lot of research in the following:
+ javascript
+ CSS
+ Bootstrap
+ React.js



[image1]: ./model.png
[image2]: ./design.jpg
[image3]: ./screen.png
