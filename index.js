//Joshua O. Pagcaliwagan 2023-00016 CMSC 100 C-1L Feb 26, 2025 Exer 4 JavaScript Part 2
//import required modules
import fs from "fs";
import {v4 as uuidv4} from "uuid";
import validator from "validator";

//function to generate unique ID, let a-first name, b-last name
function generateUniqueID(a, b) {
  //c-first letter of first name (lowercase), d-last name (lowercase)
  let c = a[0].toLowerCase();
  let d = b.toLowerCase();
  
  //make UUID and get 8 char string, let it be e
  let e = uuidv4().substring(0, 8);
  
  //return generated ID, first letter first name (low), last name (low), uuid
  return c + d + e;
}

//function to add account, let f-array of user details
function addAccount(f) {
  //check if all 4 fields are present
  if (f.length !== 4) {
    return false;
  }
  
  //get user details, a-first name, b-last name, g-email, h-age, store in f array
  let [a, b, g, h] = f;
  
  //check if first name, last name, and email are non-empty strings
  if (!a || !b || !g) {
    return false;
  }
  
  //check email(g) format
  if (!validator.isEmail(g)) {
    return false;
  }
  
  //see if age(h) is at least 18
  if (h < 18) {
    return false;
  }
  
  //generate unique ID for user, let it be i
  let i = generateUniqueID(a, b);
  
  //format user data, let it be j (first name, last name, email, age, uniqueID)
  let j = `${a},${b},${g},${h},${i}\n`;
  
  //append user data(j) to users.txt file
  fs.appendFileSync("users.txt", j);
  
  //return true to show success
  return true;
}

//export functions
export {generateUniqueID, addAccount};