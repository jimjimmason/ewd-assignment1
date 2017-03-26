# Assignment 1 - ReactJS app.

Name: James Mason

## Overview.
This app is web app for a fictional sports club. This is to guest users to gain some insight and information about the club.
Registered members will be able to access information on upcoming events (races, training, fun, charity).
Members will be able to leave reviews about event, equipment etc., this is to encourage triathlon specific interaction between members in a restricted environment.


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 + Users can view upcoming events (races, training, charity events, etc.)
 + Users can create reviews of equipment / events / books etc. or offer items for sale.
 + Users can view previously entered reviews
 + Administrator can maintain the events calendar, adding, editing and deleting events as required.
 + Administrator can maintain user of the systems.
 + Administrator can maintain the reviews section.

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
      



## App Component Design.

Diagram showing the app's hierarchical component design ). 
![componentlayout](https://cloud.githubusercontent.com/assets/25729854/24335676/3cfd32f0-127a-11e7-8e54-0dfddd7f3f25.PNG)


## UI Design.
Some sample screeshots taken from the application.

![rootpage](https://cloud.githubusercontent.com/assets/25729854/24335910/e6a54c04-127d-11e7-9cb1-9d8f2760e333.PNG)
This is the entry page to the app. I consists of Layout, NavBar, Footer, Carousel and Info#


![navbar](https://cloud.githubusercontent.com/assets/25729854/24335904/e68a19fc-127d-11e7-91b6-c0dc37f466e7.PNG)
This is the NavBar which appears throught the app.


![events](https://cloud.githubusercontent.com/assets/25729854/24335907/e68d62d8-127d-11e7-8a4a-97ba4bdd1911.PNG)
This the Events view. Note this is the view as seen by and ordinary user. The Adminsitrator will have extra functionality to Add, Delete and Edit events.


![eventsort](https://cloud.githubusercontent.com/assets/25729854/24335902/e688bd64-127d-11e7-81f4-c24099a81a6f.PNG)
This is the component for filtering and sorting Events.


![adminmembers](https://cloud.githubusercontent.com/assets/25729854/24335905/e68a37de-127d-11e7-978e-5a2bca3a5596.PNG)
This is the Administratos view of the Members page. This also contains a Filtering /sorting contol 


![adminaddmember](https://cloud.githubusercontent.com/assets/25729854/24335903/e68960d4-127d-11e7-832d-ca612d62373a.PNG)
This is form for adding a new member. Note this control is reused for registering a new member.


![register](https://cloud.githubusercontent.com/assets/25729854/24335906/e68a5c14-127d-11e7-870e-38b1324c71a5.PNG)
This is the same control as the add new member above. note the heading and botton caption changes.


![reviewcomment](https://cloud.githubusercontent.com/assets/25729854/24335908/e6a071f2-127d-11e7-8a62-77217945434b.PNG)
Here the members can leave review on events, equipment, books, or offer items for sale.


![reviews](https://cloud.githubusercontent.com/assets/25729854/24335909/e6a24e5a-127d-11e7-8bc3-5d9fb290ade3.PNG)
Members can also leave comments on reviews by other members.



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
I used uuid to create unique ids for my data stores. This is a good work around until I implement database storage.
I tried to implement react-form-validation. This will validate form data e.g required fields, valid email etc.
This prooved very dificult to implement. The only examples I found for this or similar components were based on simple form submission, rather than the JSX with embedded variables I had in my test.(AddMember.js)


## Independent learning.
As all these technologies are new to me, I had to do a lot of research in the following:
+ javascript
+ CSS
+ Bootstrap
+ React.js

I did not get to implement all the functionality I would like to have done. 
Implementing Role base autherisation, persisting to a database and allowing more interaction between the components in the application will be the challenge for the second assignment.


