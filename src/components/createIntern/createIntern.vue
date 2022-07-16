<template>
  <form>
    <label>Intern Name:</label>
    <input type="text" name="name" required />
    <label>Course:</label>
    <input type="text" name="course" required />
    <label>EDV::</label>
    <input type="text" name="edv" required />
    <label>GB:</label>
    <input type="text" name="gb" required />
    <label>BU:</label>
    <input type="text" name="bu" required />
    <label>Period of internship:</label>
    <input type="text" name="periodOfInternship" required />
    <label>Coordinator of internship:</label>
    <input type="text" name="coordinatorOfInternship" required />
    <button type="submit">Add</button>
  </form>
</template>

<script>
// import { addDoc, collection, getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
// import { firebaseConfig } from './../../firebase'
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js'
// console.log(firebaseConfig)
// const firebaseApp = initializeApp(firebaseConfig)
// const db = getFirestore(firebaseApp)

const colRef = collection(db, 'collaborators');

    addDoc(colRef, {
      name: "sus",
      course: "sus",
      edv: "sus",
      gb: "sus",
      bu: "sus",
      periodOfInternship: "sus",
      coordinatorOfInternship: "sus"})

    // const onSubmit = async () => {
    //   await createUser({ ...form });
    //   name = "";
    //   course = "";
    //   edv = "";
    //   gb = "";
    //   bu = "";
    //   periodOfInternship = "";
    //   coordinatorOfInternship = "";
    // };
</script>

<style>
</style>