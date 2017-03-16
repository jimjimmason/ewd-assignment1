import _ from 'lodash';

var members =  [
  {
    "id": 1,
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
    "YearOfBirth": "1965",
    "imageUrl": "",
    "Type": "Administrator",
    "TriathlonIrelandID": "1965IE12431244"
  },
  {
    "id": 2,
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
    "YearOfBirth": "1986",
    "imageUrl":"",
    "Type": "Member",
    "TriathlonIrelandID": ""
  }
];

    var stubAPI = {
         deleteOrig : function(k) {
           var elements = _.remove(members,
               function(member) {
                     return member.id === k;
                  });
           return elements;
         },
         delete : function(k) {
            var promise = new Promise( (resolve,reject) => {
               var elements = _.remove(members,
                      function(member) {
                          return member.id === k;
                     });
                setTimeout(() => resolve(elements),10 );
            }) ;
            return promise ;

          },
         getAllOrig : function() {
             return members ;
         },
         getAll : function() {
           var promise = new Promise ((resolve,reject) => {
                   setTimeout(() => resolve(members),10 );
           }) ;
           return promise ;
         },

//todo  add all fields for new member
         add : function(n,a,p) {
          var len = members.length ;
          var newL_len = members.push({
             name: n, address : a, phone_number: p }) ;
          return newL_len > len ;
         },
         updateOrig : function(key,n,a,p) {
            var index = _.findIndex(members, function(member) {
                 return member.id === key;
              } );
            if (index !== -1) {
               members.splice(index, 1, {name: n, address: a, phone_number: p});
               return true ;
              }
          return false ;
        },
        update : function(key,n,a,p) {
           var promise = new Promise ((resolve,reject) => {
              setTimeout(() => {
                 var index = _.findIndex(members, function(member) {
                     return member.id === key;
                 } );
                if (index !== -1) {
                    members.splice(index, 1, {name: n, address: a, phone_number: p});
                    resolve(true);
                } else {
                    reject(key) ;
                }
              },1000) ;
           });
           return promise ;
        }  // update
      }

      export default stubAPI ;
