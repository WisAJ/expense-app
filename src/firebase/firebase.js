import * as firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDscZhQhtGV_vsU-fkHGewvqPhOtLgiFXg",
    authDomain: "expensifyapp-e2720.firebaseapp.com",
    databaseURL: "https://expensifyapp-e2720-default-rtdb.firebaseio.com",
    projectId: "expensifyapp-e2720",
    storageBucket: "expensifyapp-e2720.appspot.com",
    messagingSenderId: "948886015328",
    appId: "1:948886015328:web:9d5f210e91246d20bce205",
    measurementId: "G-7816PX8NYR"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref('expenses')
    .once('value')
    .then((snapshot) =>{
        const expenses = [];
        snapshot.forEach((childsnapshot) =>{
            expenses.push({
               
                ...childsnapshot.val()
            });
        });
            console.log(expenses);
    });


  database.ref('expenses').push({
      name:'Wissam AJ',
      hello:"it is me agian",
      isSingle: false,
      Wife: 'just one',
      cildren: '2'

  });

//   database.ref().remove()
//   .then(function() {
//     console.log("Remove succeeded.")
//   })
//   .catch(function(error) {
//     console.log("Remove failed: " + error.message)
//   });