import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import TestButton from "./Button";

function Test() {
  var addUser = () => {
    createUserWithEmailAndPassword(auth, "donkey@gmail.com", "12345678")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  var checker = () => {
    console.log(auth.currentUser.email);
    console.log(auth.currentUser.uid);
  };
  //
  var signOut = () => {
    auth
      .signOut()
      .then((result) => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err.errorMessage);
      });
  };
  //
  var addData = () => {
    var collectionRef = collection(db, "customersData");
    var docRef = doc(db, "customersData", "VDBj24030lPnDKGaomnn");
    // addDoc(collectionRef,{
    //   name:"Tony",
    //   age:45,
    //   created: serverTimestamp(),
    // }).then((result) => {
    //   console.log("Data added")
    // }).catch((err) => {
    //   console.log(err.errorMessage)
    // });
    //
    updateDoc(docRef, {
      name: "Jimmy",
      age: 45,
      created: serverTimestamp(),
    })
      .then((result) => {
        console.log("Data updated");
      })
      .catch((err) => {
        console.log(err.errorMessage);
      });
  };

  //
  var googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).then((result) => {
      var user = result.user;
      console.log(user.email)
      console.log(user.name)
      console.log(user.getIdToken)
    }).catch((err) => {
      console.log(err.errorMessage)
    });
  }

  var getColl = async () => {
    // we first reference our data
    const codeRef = collection(db, "customersData");
    // requests for data
    const codeQuerySnapshop = await getDocs(codeRef);
    console.log(codeQuerySnapshop);
    // loop through all the data here
    codeQuerySnapshop.forEach(doc=>{
      console.log(doc.data());
    })
  
    // returns result/code
    // return codeQuerySnapshop.data().code;
  };

  return (
    <>
      <button onClick={addUser}>Create User</button>
      <br></br>
      <button onClick={checker}>Check</button>
      <br></br>
      <button onClick={signOut}>Sign Out</button>
      <br></br>
      <button onClick={addData}>Add Datat</button>
      <br></br>
      <button onClick={googleSignIn}>Google Signin</button>
      <br/>
      <br/>
      <br/>
      <TestButton/>
      <button onClick={getColl}>Get Daya</button>
    </>
  );
}

export default Test;
