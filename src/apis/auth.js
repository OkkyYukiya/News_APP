import { provider, auth } from "../firebase";

export const signInGoogle = async () => {
  await auth.signInWithPopup(provider).catch((err) => alert(err.message));
};

export const signUp = async (email, password) => {
  await auth.createUserWithEmailAndPassword(email, password);
};

export const signInEmail = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};
