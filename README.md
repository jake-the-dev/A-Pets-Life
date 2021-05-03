# PetJournal
Log a recollection of memories from your Pet's life. 

  <img src="https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux-593D88?logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Material--UI-0081CB?logo=material-ui&logoColor=white" />
  <img src="https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=white" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white" />

<details><summary>Requirements</summary>
A Backend
CRUD
Authentication
Include Wireframes
Clean JSX
Hosted
Pushed to Github
Readme
</details>

<details><summary>Wireframes</summary>
Todo
</details>

<details><summary>What does the project answer?</summary>
Folder structure - from many source codes I've seen before I see so many folders that I haven't seen in react. I wanted to expand where possible to understand large folder structures. 
Redux - 1. New Job uses it. 2. State management as I struggled with understanding the hierarchy of react state and having just one global Redux Store simplifies it greatly. 
Everyone loves pets.
</details>

<details><summary>Learned along the way</summary>
Only a lot so far. 
dotenv files for secure credentials
MondoDB Atlas and Compass are both the same for viewing db data. 
router.get('/', (req,res)) vs router.route("/").get((req, res)
You have to use CORS before you specify routes. 
app.use("/") has to be last otherwise it'll be the default. Can't access "/memory"
Todo tree from the marketplace
The precision of capitalisation of db fields. Couple hours of frustration there.
That I don't really care for Bootstrap / react-bootstrap's jsx implementation.
JSX Fragments as a parent to use multiple .
Redux is easier to understand and use with React Hooks now a thing.
Redux creates a lot more files and folders but that's a small price when trying to understand state. 
A thunk is a function that wraps an expression to delay its evaluation. (allows async await)
Action creators create objects → objects are dispatched to the store → the store invokes reducers → reducers generate new state → listeners are notified of state updates.
Creating CONSTANTS for strings as strings don't trigger error logs. ie Actions and reducers.
Dynamic Titles with ternary operators inside JSX: {currentId ? "Edit" : "Create"} a Memory
Using ternary operators to create 2 components in 1 field. 
</details>

<details><summary>Understanding Folder Structure</summary>
assets: for images etc
components: for react components. 
api: contains axios middleware. 
actions: 
reducers: 
styles.js files: For MaterialUI's { makeStyles } theming. 
constants - used to eliminate any "strings" being hardcoded. 
Auth: contains everything for the authentication form
Procfile: required for Heroku
</details>

<details><summary>Out of Scope</summary>
Add a list of Pets per user. When creating a memory select Pet to add. 
Search
Search on Pets
Search on Tags
Backend Testing. 
Frontend Testing. 
Redux Testing. 
Custom upload image button. Add label for component rather than an input.
When changing to sign in mode set email with {!isSignup && autoFocus}
</details>

<details><summary>Bugs</summary>
Memory date stamp isn't consistent with date created. 
</details>

<details><summary>Installation</summary>
Server: 
Node:
npm install
npm start
Client:
npm install 
npm audit fix --force
npm start
Heroku: 
heroku logs --tail

</details>
