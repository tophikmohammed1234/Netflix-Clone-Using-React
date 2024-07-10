import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	EmailAuthProvider,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_apiKey,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "user"), {
			uid: user.uid,
			name,
			EmailAuthProvider: "local",
			email,
		});
	} catch (error) {
		console.log(error);
		toast.error(error.code.split("/")[1].split("-").join(" "));
	}
};

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
		toast.error(error.code.split("/")[1].split("-").join(" "));
	}
};

const logout = () => {
	signOut(auth);
};
export { auth, db, login, signup, logout };
