# PetJournal
Log a recollection of memories from your Pet's life. 

  <img src="https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-43853D?logo=node.js&logoColor=white" />
Redux
Thunk
Material UI
Axios


<details><summary>Plan of Attack</summary>
Todo
</details>

<details><summary>Understanding Folder Structure</summary>
actions: 
api: contains axios middleware. \
assets: for images etc
components: for react components. 
reducers:
styles.js files: For MaterialUI's makeStyles theming. 
</details>

<details><summary>Learned along the way</summary>
Only a lot so far. 
dotenv files for secure credentials
MondoDB Atlas and Compass are both the same for viewing db data. 
router.get('/', (req,res)) vs router.route("/").get((req, res)
Todo tree from the marketplace
The precision of capitalisation of db fields. Couple hours of frustration there.
That I don't really care for Bootstrap / react-bootstrap's jsx implementation.
JSX Fragments as a parent to use multiple .
Redux is easier to understand and use with React Hooks now a thing.
Redux creates a lot more files and folders but that's a small price when trying to understand state. 
A thunk is a function that wraps an expression to delay its evaluation. (allows async await)
Action creators create objects → objects are dispatched to the store → the store invokes reducers → reducers generate new state → listeners are notified of state updates.
Creating CONSTANTS for strings as strings don't trigger error logs. ie Actions and reducers.
</details>

<details><summary>Out of Scope</summary>
Add a list of Pets per user. When creating a memory select Pet to add. 
Search
Search on Pets
Search on Tags
Backend Testing. 
Frontend Testing. 
Redux Testing. 
</details>