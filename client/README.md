# React footbalii 
 we have two section in this project in two diffrent folder 
 1 - api
 2 - client

 api section handled our server side for fetching data and client section
 i tried to make an simple backend for fetching data from our static data base file 
 we can handle our query and adding limitation for fetching how many post 


client section handled UI of project and as you seen i tried to make reusable and maintable component like Button components 

# ///////////////// PROJECT CHALLEMGES ///////////
i had some challenges , Some have been resolved and some remain

#1 - first infinit scrolling challenge , beacuse i didn't have an Api for fetching and limitation fetching and i spent time to make my own api 

#2- As I said before I didn't have an database and i make once but in that we have duplicate information 
and when you scrolling you will see duplicate informations of leagues and team And if we have server and api our something else this problem will be solved

#3- I make custom hook and name it UseFetch and we can use it for handling error and response from server 

#4- i tried to make my own swiper calandar but as you know that wil be challenging and we have a many packages for that but in react native And it will be easier for me to learn react-native than to make my own calandar but as you know Even if we build it, we still need the games information on the server 
# and unfortunately for me, I still could not solve this challenge


I used 
# React -React icons  - React hooks
# tailwind and tailwind merge
# vite package manger
for client side and 
# express js of node js 
for handleing backend and Api

# To use you must run api folder with -npm start
# and start client side with npm run dev