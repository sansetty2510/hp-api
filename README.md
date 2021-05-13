# HP-api
A node + express + mongoose project on Harry Potters film characters, and used this API (https://hp-api.herokuapp.com/) for reference.

### Run local
- Clone the repo
- `npm i` to intall the dependencies  
- MongoDB setup
  - Install mongoDB on your local machine (https://docs.mongodb.com/manual/administration/install-community/)
  - Start mongoDB server `brew services start mongodb-community@4.4` (Mac users)
  - Create `harry-potter` data base in your local (use MongoDB Compass)
  - Create `characters` collection (sample characters files here: [./data/characters.json](./data/characters.json))
- `npm start` to start local server

### URL
- http://localhost:3000/characters - view all characters
- http://localhost:3000/characters/students - view all characters who are Hogwarts students during the book series
- http://localhost:3000/characters/staff - view all characters who are Hogwarts staff during the book series
- http://localhost:3000/characters/house/:house - view all characters in a certain house, e.g. /Slytherin
