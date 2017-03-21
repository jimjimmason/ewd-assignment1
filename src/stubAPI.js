import _ from 'lodash';
import uuid from 'uuid';

var members =  [
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
    "TriathlonIrelandID": "1965IE12431244"
  },
  {
    "id": uuid.v4(),
    "FirstName": "Brian",
    "Surname": "O'Brien",
    "Address1": "New Street",
    "Address2": "Some Road",
    "Town": "Thurles",
    "County": "Co. Tipperary",
    "Nationality": "Irish",
    "phone_number": "0885568648",
    "email": "bobrien@somewhere.net",
    "DOB" : "1986-07-07",
    "gender": "male",
    "imageUrl":"",
    "Type": "race",
    "TriathlonIrelandID": ""
  }
];

var events =  [
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
  },
  {
    "id": uuid.v4(),
    "eventDate": "2017-04-19",
    "eventName": "Portlaoise Sprint (poolswim)",
    "eventType": "Triathlon",
    "distance": ["Sprint","Try-a-Try"],
    "raceSeries": "",
    "ageGroup": ["adults"],
    "county": "Laois",
    "eventUrl": "www.laoistriathlon.com",
    "membersCompeting": [],
    "membersCompetingCount": 0
  }
];

    var stubAPI = {
         deleteMember : function(k) {
            var promise = new Promise( (resolve,reject) => {
               var elements = _.remove(members,
                      function(member) {
                          return member.id === k;
                     });
                setTimeout(() => resolve(elements),10 );
            }) ;
            return promise ;

          },
         getAllMembers : function() {
           var promise = new Promise ((resolve,reject) => {
                   setTimeout(() => resolve(members),10 );
           }) ;
           return promise ;
         },

         addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone
              ,email,dob,gender,imageUrl,type,tino) {
          var len = members.length ;
          var newL_len = members.push({
            id: uuid.v4(),
            FirstName: fn,
            Surname : ln,
            Address1: addr1,
            Address2: addr2,
            Town: town,
            County: county,
            Nationality: nationality,
            phone_number: phone,
            email: email,
            DOB : dob,
            gender: gender,
            imageUrl: imageUrl,
            Type: type,
            TriathlonIrelandID: tino
          }) ;
          return newL_len > len ;
        },  // addMember
        updateMember : function(key,fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,gender,imageUrl,type,tino) {
           var promise = new Promise ((resolve,reject) => {
              setTimeout(() => {
                 var index = _.findIndex(members, function(member) {
                     return member.id === key;
                 } );
                if (index !== -1) {
                    members.splice(index, 1, {
                      FirstName: fn,
                      Surname : ln,
                      Address1: addr1,
                      Address2: addr2,
                      Town: town,
                      County: county,
                      Nationality: nationality,
                      phone_number: phone,
                      email: email,
                      DOB : dob,
                      gender: gender,
                      imageUrl: imageUrl,
                      Type: type,
                      TriathlonIrelandID: tino
                    });
                    resolve(true);
                } else {
                    reject(key) ;
                }
              },10) ;
           });
           return promise ;
        },  // update

      // END MEMBERS SECTION

      // EVENTS
      getAllEvents : function() {
        var promise = new Promise ((resolve,reject) => {
                setTimeout(() => resolve(events),10 );
        }) ;
        return promise ;
      },

      deleteEvent : function(k) {
         var promise = new Promise( (resolve,reject) => {
            var elements = _.remove(events,
                   function(event) {
                       return event.id === k;
                  });
             setTimeout(() => resolve(elements),10 );
         }) ;
         return promise ;
       },
       addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl) {
        var len = events.length ;
        var newL_len = events.push({
          id: uuid.v4(),
          eventDate: eDate,
          eventName: eName,
          eventType : eType,
          distance: distance,
          raceSeries: series,
          ageGroup: ageGroup,
          county: county,
          eventUrl: eventUrl
        }) ;
        return newL_len > len ;
       },  // addMember
       updateEvent : function(key,eDate,eName,eType,distance,series,ageGroup,county,
            eventUrl,membersCompeting,membersCompetingCount) {
         var promise = new Promise ((resolve,reject) => {
            setTimeout(() => {
               var index = _.findIndex(events, function(event) {
                   return event.id === key;
               } );
              if (index !== -1) {
                  members.splice(index, 1, {
                    eventDate: eDate,
                    eventName: eName,
                    eventType : eType,
                    distance: distance,
                    raceSeries: series,
                    ageGroup: ageGroup,
                    county: county,
                    eventUrl: eventUrl,
                    membersCompeting: membersCompeting,
                    membersCompetingCount: membersCompetingCount
                  });
                  resolve(true);
              } else {
                  reject(key) ;
              }
            },10) ;
         });
         return promise ;
       }  // update
    }



export default stubAPI ;
