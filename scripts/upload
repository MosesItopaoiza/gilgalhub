import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

const db = window.firebaseApp.db;
const storage = window.firebaseApp.storage;

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const file = e.target[1].files[0];

  if (!title || !file) return alert("Please fill out all fields");

  const storageRef = ref(storage, `tracks/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  await addDoc(collection(db, "tracks"), {
    title,
    url,
    artist: "Moses", // Replace with dynamic user info later
    uploadedAt: new Date()
  });

  alert("Track uploaded successfully!");
  e.target.reset();
});
