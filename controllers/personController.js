import Person from "./models/Person.js";

async function getPersons(req,res) {
  Person.find({}).then((person) => {
    res.send('Persons resource');
  })
}  
  
async function getPerson(req,res) {
  res.send('Persons resource');
}
async function createPerson(req,res) {
  res.send('Person has been created');
}
async function updatePerson(req,res) {
  res.send('Person has been updated');
}
async function deletePerson(req,res) {
  res.send('Person has been deleted');
}

export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson
};