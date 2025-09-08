import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";

// Paste your actual Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = e.target[0].value;
  const file = e.target[1].files[0];

  if (!title || !file) return alert("Please fill out all fields");

  try {
    const storageRef = ref(storage, `tracks/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, "tracks"), {
      title,
      url,
      artist: "Moses",
      uploadedAt: new Date()
    });

    alert("Track uploaded successfully!");
    e.target.reset();
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Upload failed. Please try again or check your browser settings.");
  }
});
