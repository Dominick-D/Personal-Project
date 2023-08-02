export const fetchPropertyData = async () => {
  // Fetch property data from your API
  const response = await fetch('https://your-api-url.com/properties');
  const data = await response.json();
  return data;
};

export const fetchUserData = async () => {
  // Fetch user data from your API
  const response = await fetch('https://your-api-url.com/users');
  const data = await response.json();
  return data;
};

export const fetchServices = async () => {
  // Fetch services data from your API
  const response = await fetch('https://your-api-url.com/services');
  const data = await response.json();
  return data;
};

export const fetchEstimatedSalePrice = async (propertyId: string) => {
  const response = await fetch(
    `https://api.zillow.com/property/${propertyId}/estimatedSalePrice`,
  );
  const data = await response.json();
  return data.estimatedSalePrice;
};

import firebase from 'firebase/app';
import 'firebase/auth';

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};
