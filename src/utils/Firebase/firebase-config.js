// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  // getDocs,
  addDoc,
  setDoc,
  doc,
  // serverTimestamp,
} from 'firebase/firestore';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBsDAjPMsKc-TWH-nqM9kp14LXGVVH4w2g',
  authDomain: 'airbnb-clone-c728e.firebaseapp.com',
  projectId: 'airbnb-clone-c728e',
  storageBucket: 'airbnb-clone-c728e.appspot.com',
  messagingSenderId: '316749824308',
  appId: '1:316749824308:web:b034ac8dc7ce6cd266a561',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithGoogle2 = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // const name = result.user.displayName;
    // const email = result.user.email;
    // const profilePic = result.user.photoURL;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// Initialize services
export const db = getFirestore(app);

// get collection ref
export const listingsCollectionRef = collection(db, 'listings');
export const scrollBarWidgetRef = collection(db, 'scrollBarWidget');
export const usersCollectionRef = collection(db, 'users');
export const userInteractions = collection(db, 'userInteractions');

export const tempSet = () => {
  // Add userInteractions "Reviews"
  // setDoc(doc(db, 'userInteractions', 'review4'), {
  //   type: 'review',
  //   month: 'August',
  //   year: 2021,
  //   forProperty: 'listing1',
  //   reviewComment: 'Amazing property',
  //   user: 'user1',
  // });

  // Add scrollBarOptions
  // setDoc(doc(db, 'scrollBarWidget', 'scrollBarOptions'), {
  //   scrollBarOptions1: [
  //     { name: 'Accessible', icon: 'Accessible' },
  //     { name: 'Bakery', icon: 'bakery_dining' },
  //     { name: 'Basketball', icon: 'sports_basketball' },
  //     { name: 'Bars', icon: 'Liquor' },
  //     { name: 'Beach', icon: 'beach_access' },
  //     { name: 'Biking', icon: 'pedal_bike' },
  //     { name: 'Bungalow', icon: 'Bungalow' },
  //     { name: 'Cabin', icon: 'Cabin' },
  //     { name: 'Camping', icon: 'Camping' },
  //     { name: 'Casino', icon: 'Casino' },
  //     { name: 'Chalet', icon: 'Chalet' },
  //     { name: 'Cottage', icon: 'Cottage' },
  //     { name: 'Icecream', icon: 'Icecream' },
  //     { name: 'Festival', icon: 'Festival' },
  //     { name: 'Fishing', icon: 'Phishing' },
  //     { name: 'Games', icon: 'sports_esports' },
  //     { name: 'Golf', icon: 'golf_course' },
  //     { name: 'Gym', icon: 'fitness_center' },
  //     { name: 'Hiking', icon: 'Hiking' },
  //     { name: 'Kayaking', icon: 'Kayaking' },
  //     { name: 'Paragliding', icon: 'Paragliding' },
  //     { name: 'Pool', icon: 'Pool' },
  //     { name: 'Sledding', icon: 'Sledding' },
  //     { name: 'Skating', icon: 'Roller_Skating' },
  //     { name: 'Smokeless', icon: 'smoke_free' },
  //     { name: 'Snowboarding', icon: 'Snowboarding' },
  //     { name: 'Solar', icon: 'solar_power' },
  //     { name: 'Surfing', icon: 'Surfing' },
  //     { name: 'Tennis', icon: 'sports_tennis' },
  //     { name: 'Village', icon: 'holiday_village' },
  //     { name: 'Tapas', icon: 'Tapas' },
  //     { name: 'Yoga', icon: 'self_improvement' },
  //   ],
  // });

  // Add a user
  // setDoc(doc(db, 'users', 'user4'), {
  //   user: {
  //     userId: 'user4',
  //     userName: 'Emily',
  //     host: true,
  //     joinYear: 2016,
  //     joinMonth: 'August',
  //     identity: true,
  //     phoneNumber: true,
  //     workEmail: true,
  //     bio: `I am a foodie who loves to travel! As a Teton Valley real estate agent since 2008, I've come to specialize in vacation rentals.`,
  //     city: 'Chicago',
  //     state: 'Illinois',
  //     country: 'United States',
  //     profilePicture: 'https://bit.ly/3SMCMww',
  //     stayAvailability: ['phone', 'text'],
  //     responseRate: 100,
  //     reponseTime: 0.5,
  //     language: ['english', 'spanish'],
  //     work: 'accountant',
  //   },
  //   reviews: {
  //     given: ['review1', 'review2', 'review3', 'review4'],
  //     received: ['response1', 'response2', 'response3'],
  //   },
  //   listings: ['listing1', 'listing2', 'listing3'],
  // });

  // Add a listing
  setDoc(doc(db, 'listings', 'listing14'), {
    location: {
      city: 'Chicago',
      state: 'Illinois',
      country: 'United States',
      closestPark: 'Millenium Park',
      placeName: 'Crazy Boho Lake House',
      stayType: 'home',
      center: { lat: 41.9113, lng: -87.6898 },
      // wifi: true,
      aboutLocation: `The Teton Timber House is a modern, western-style lodge, perfect for family vacations and group retreats. It's conveniently located off Ski Hill Road, minutes from Driggs and a short drive to Grand Targhee Resort. It sits on 2.2 acres with privacy from all sides and is architecturally designed to absorb maximum natural light with many large windows and skylights throughout the house. Please notify your host of any pets that will be joining.`,
    },
    images: [
      'https://bit.ly/3Enkvla',
      'https://bit.ly/3V97CBe',
      'https://bit.ly/3ylJVM6',
      'https://bit.ly/3EiuEzw',
      'https://bit.ly/3rzOdvu',
      'https://bit.ly/3SQ4CaS',
      'https://bit.ly/3V6PVC7',
      'https://bit.ly/3CDOMuN',
    ],
    cost: { USDperNight: 100, cleaningFee: 20, serviceFee: 20, minNights: 3 },
    capacity: {
      guestCapacity: 8,
      bedroomCount: 4,
      bedCount: 3,
      bathCount: 1,
    },
    sleepArrangements: {
      1: { king: 1 },
      2: { king: 1 },
      3: { king: 1 },
      4: { queen: 1 },
    },
    feedbackScore: { rating: 4.85, reviewCount: 82 },
    reviews: ['review1', 'review2', 'review3'],
    host: {
      userID: 'user1',
    },
    amenities: [
      { name: 'Blender', icon: 'blender' },
      { name: 'Kitchen', icon: 'kitchen' },
      { name: 'Microwave', icon: 'Microwave' },
      { name: 'wifi', icon: 'wifi' },
      { name: 'Laundry', icon: 'local_laundry_service' },
      { name: 'Pets allowed', icon: 'pets' },
      { name: 'Yard', icon: 'Yard' },
      { name: 'Fireplace', icon: 'Fireplace' },
      { name: 'TV', icon: 'TV' },
      { name: 'Iron', icon: 'Iron' },
      { name: 'Balcony', icon: 'Balcony' },
      { name: 'Fire Extinguisher', icon: 'fire_extinguisher' },
      { name: 'Hangers', icon: 'checkroom' },
      { name: 'Silverware', icon: 'flatware' },
    ],
    thingsToKnow: {
      rules: {
        checkin: '4:00 PM',
        checkout: '10:00 AM',
        selfCheckin: true,
        smokingAllowed: true,
        petsAllowed: true,
      },
      healthSafety: {
        covid: true,
        pool: true,
        carbonMonoxide: true,
        smokeAlarm: true,
      },
      cancellation: {
        allowedCancellation: true,
        daysNoticeRequired: 5,
      },
    },
  });
};

export const tempAdd = () => {
  addDoc(userInteractions, {
    review1: {
      type: 'review',
      month: 'August',
      year: 2021,
      forProperty: 'listing1',
      review: 'Amazing property',
      user: 'user1',
    },
  });
};
