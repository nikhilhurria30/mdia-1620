// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Store information about three horses in your stables.
// Each horse should have the following information associated with it:
//
// - the name of a horse at your stable
// - the age of the horse
// - what the horse likes to snack on
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store the name of your stable.
// Create a variable and use it to store a message for visitors to the stable as a string. It should include the name of your stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing. Include the name of one of your horses in the message.

//------------------------- First day (Assignment 2) -------------------------//

// Move the horses in your stables into objects, if they aren't already. Each horse should have its own object.
// (After you are done, your horse variables from Assignment 1 should be deleted)
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" array.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

// Create a variable that stores your total number of stalls.
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.


let stableName = "term1Stables"

let visitorMessage = `Welcome to ${stableName}!`;
console.log(visitorMessage);


// horse1
let horse1 = {
    name : "Architt",
    nickName : "Archie",
    favoriteTreat : "Protein",
    age : 20,
    monthlyRent : 100,
    lateFee : 100*1.20,
    ishorse1inside : true,
    color : "Brown",
    hobby : "Gym"
};

// horse2
let horse2 = {
    name : "Rahul",
    nickName : "Natty",
    favoriteTreat : "Rice",
    age : 21,
    monthlyRent : 200,
    lateFee : 200*1.20,
    ishorse2inside : false,
    color : "black",
    hobby : "cricket"
};

// horse3 
let horse3 = {
    name : "Daksh",
    nickName : "Dahiya",
    favoriteTreat : "DietCoke",
    age : 22,
    monthlyRent : 300,
    lateFee : 300*1.20,
    ishorse3inside : true,
    color : "white",
    hobby : "Driving"
};

let latePaymentMessage = `${horse1.name} owes $${horse1.lateFee} because monthly payment is late.`
console.log(latePaymentMessage)

let horses = [horse1,horse2,horse3];

let horse4 = {
    name : "Nikhil",
    nickName : "Nick",
    favoriteTreat : "Sushi",
    age : 21,
    monthlyRent : 400,
    lateFee : 400*1.20,
    ishorse4inside : false,
    color : "red",
    hobby : "Badminton"
};

horses.push(horse4);

horse1.ishorse1hungry = true;
horse2.ishorse2hungry = false;
horse3.ishorse3hungry = true;
horse4.ishorse4hungry = false;

let totalNumberOfStalls = 10;

function availableStalls() {
    let available = totalNumberOfStalls - horses.length;
    console.log(`Available Stalls = ${available}`)
}
availableStalls()

function latePayment(horse) {
    let amount = horse.lateFee;
    console.log(`${horse.name} owes $${amount} for late payment`);
}
latePayment(horse1);

function getNickName(horse) {
    return horse.nickName;
}
