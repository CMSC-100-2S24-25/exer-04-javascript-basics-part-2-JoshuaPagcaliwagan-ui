//Joshua O. Pagcaliwagan 2023-00016 CMSC 100 C-1L Feb 26, 2025 Exer 4 JavaScript Part 2
// import functions from index.js
import {generateUniqueID, addAccount} from "./index.js";
import fs from "fs";

//test generateUniqueID function
console.log("Generated ID:", generateUniqueID("Joshua", "Pagca"));

//test addAccount function with diff cases
console.log("Adding Joshua Pagca:", addAccount(["Joshua", "Pagca", "jopagca@gmail.com", 20]));//valid
console.log("Adding Joel Pagca:", addAccount(["James", "", "jamespagca.com", 22]));//last name is empty string
console.log("Adding James Pagca:", addAccount(["James", "Pagca", "jamespagca.com", 22]));//invalid email
console.log("Adding Jakob Pagca:", addAccount(["Jakob", "Pagca", "jakobpagca@gmail.com", 14]));//age below 18
console.log("Adding Zeke Pagca:", addAccount(["Zeke", "Pagca", "zekepagca@gmail.com"]));//no age (not all fields present)
console.log("Adding Melay Pagca:", addAccount(["Melay", "Pagca", "mopagca@gmail.com", 48]));//valid