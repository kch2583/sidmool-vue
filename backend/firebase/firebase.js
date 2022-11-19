// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
// const { getFirestore } = require("firebase/firestore");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
var admin = require("firebase-admin");

var serviceAccount = require("../../../sidmool-vue-firebase-adminsdk-bltwc-03e6f07529.json");

// var { getAnalytics } = require("firebase/analytics");

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3jTZanAZc8-aDBADVHdy7HBk1SIs1Yoc",
  authDomain: "sidmool-vue.firebaseapp.com",
  projectId: "sidmool-vue",
  storageBucket: "sidmool-vue.appspot.com",
  messagingSenderId: "949981281347",
  appId: "1:949981281347:web:acb052aea587ef1d4aa8f6",
  measurementId: "G-KQ3357ZM97",
  credential: admin.credential.cert(serviceAccount),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// var db = init.firestore(); //위 설정대로 저장소에 접속합니다.

module.exports = db;
