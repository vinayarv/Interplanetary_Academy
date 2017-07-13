const models = require('./db/models');
const pkg = require('./package.json');
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;

const Sequelize = require('sequelize');
const db = new Sequelize( connectionString, {
    logging: false
  }
);

const Campus = models.Campus;
const Student = models.Student;
const User = models.User;

console.log(Campus, Student, User);

const campuses = [
  {name: 'Mercury', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2009/08/Mercury-e1418849404713-580x350.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  {name: 'Venus', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2008/10/Venus-580x580.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Earth', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2009/08/Earth_apollo11-580x365.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Mars', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2014/10/True-colour_image_of_Mars_seen_by_OSIRIS-580x580.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Jupiter', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2014/10/Jupiter_eye-e1414524396756-580x475.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Saturn', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2013/10/saturn_20131010-e1417854764439-580x395.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Uranus', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2008/10/uranus_voy2-580x569.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'},
  // {name: 'Neptune', imageUrl: 'https://www.universetoday.com/wp-content/uploads/2008/11/neptunevoyager2-580x580.jpg', credits: 'https://www.universetoday.com/38068/pictures-of-the-planets/'}
];

const id = () => Math.round(Math.random() * (campuses.length - 1)) + 1;

const students = [
  {name: 'Abc', email: 'abc@gmail.com', campusId: id()},
  {name: 'Bcd', email: 'bcd@gmail.com', campusId: id()},
  {name: 'Cdf', email: 'cdf@gmail.com', campusId: id()},
  {name: 'Dfg', email: 'dfg@gmail.com', campusId: id()},
  // {name: 'Fgh', email: 'fgh@gmail.com'},
  // {name: 'Ghi', email: 'ghi@gmail.com'},
  // {name: 'Hij', email: 'hij@gmail.com'},
  // {name: 'Ijk', email: 'ijk@gmail.com'},
  // {name: 'Jkl', email: 'jkl@gmail.com'},
];

const seed = () => {
  Promise.all(campuses.map( campus => {
    Campus.create(campus);
  }))
  .then(() => {
    Promise.all(students.map(student => {
      Student.create(student);
    }));
  })
  .then( () => {
    User.create({name: 'Vinaya'});
  });
}


const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding database...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
