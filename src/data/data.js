// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import dataPhones from "./phones.json";

import dataDiscount from "./carousel.json";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyX1MNMLGRapfVUMfq17xxrWZ9FiM-jSE",
  authDomain: "ecommerce-40d2d.firebaseapp.com",
  projectId: "ecommerce-40d2d",
  storageBucket: "ecommerce-40d2d.appspot.com",
  messagingSenderId: "315863023215",
  appId: "1:315863023215:web:391b7be47ca2dcdb25579a",
};

class Phone {
  constructor(id, name, image, imageURL, price, discount) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.imageURL = imageURL;
    this.price = price;
    this.discount = discount;
  }
}

class Discount {
  constructor(id, name, image, imageURL, description, discount) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.imageURL = imageURL;
    this.description = description;
    this.discount = discount;
  }
}

// Função para converter JSON em objetos da classe Phone
function convertJSONToPhone(json) {
  return json.map(
    (phoneData) =>
      new Phone(
        phoneData.id,
        phoneData.name,
        phoneData.image,
        phoneData.imageURL,
        phoneData.price,
        phoneData.discount
      )
  );
}

function convertJSONToDiscount(json) {
  return json.map(
    (discountData) =>
      new Discount(
        discountData.id,
        discountData.name,
        discountData.image,
        discountData.imageURL,
        discountData.description,
        discountData.discount
      )
  );
}

// Convertendo JSON em objetos Phone
const phones = convertJSONToPhone(dataPhones);

const discount = convertJSONToDiscount(dataDiscount);

// Testando a saída

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const images = getStorage(app);

async function fetchPhonesWithImageUrl() {
  const phonesWithImageUrl = await Promise.all(
    phones.map(async (data) => {
      const imagesRef = ref(images, data.image);
      data.imageURL = await getDownloadURL(imagesRef);
      return data;
    })
  );

  return phonesWithImageUrl;
}

async function fetchDiscountWithImageUrl() {
  const discountWithImageUrl = await Promise.all(
    discount.map(async (data) => {
      const imagesRef = ref(images, data.image);
      data.imageURL = await getDownloadURL(imagesRef);
      return data;
    })
  );

  return discountWithImageUrl;
}

export async function fetchDataPhones() {
  try {
    const phonesWithImageUrl = await fetchPhonesWithImageUrl();
    
    
    return phonesWithImageUrl;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
}

export async function fetchDataDiscount() {
  try {
    const discountWithImageUrl = await fetchDiscountWithImageUrl();

    return discountWithImageUrl;
  } catch (error) {
    console.error("Error fetching discount:", error);
  }
}
