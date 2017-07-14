'use strict'
const api = require('express').Router();
const db = require('../db');

const Campus = db.models.campus;
const Student = db.models.student;
const User = db.models.user;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}));

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(allCampus => res.send(allCampus))
	.catch(next);
});

api.get('/campus/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => campus.id)
	.then(id => {
		return Student.findAll({
			where: {
				campusId: req.params.id
			}
		})
	})
	.then(students => {
		res.send(students);
	})
	.catch(next);
});

api.get('/students', (req, res, next) => {
	Student.findAll({
		include: [ {
			model: Campus
		}]
	})
	.then(allStudents => {
		const response = allStudents.map(student => {
			var campus = student.campus.name ? student.campus.name : 'No Campus';
			 return Object.assign({}, {id: student.id, name: student.name, email: student.email, campus: campus});
		});
		res.send(response);
	})
	.catch(next);
});

api.get('/student/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => res.send(student))
	.catch(next);
});

api.post('/campuses', (req, res, next) => {
	Campus.findOrCreate({
		where: {
			name: req.body.name,
			imageUrl: req.body.imageUrl,
			credits: req.body.credits
		}
	})
	.spread((newCampus, createdBool) => {
		if (createdBool){
			res.send(newCampus);
		}
	})
	.catch(next);
});

api.post('/students', (req, res, next) => {
	Student.findOrCreate({
		where: {
			name: req.body.name,
			email: req.body.email,
			campusId: req.body.campusId
		}
	})
	.spread((newStudent, createdBool) => {
		if (createdBool){
			res.send(newStudent);
		}
	})
	.catch(next);
});

api.put('/student/:id', (req, res, next) => {

	Student.update(req.body,
	{
		where: {
			id: req.params.id
		}
	})
	.then( () => {
		Student.findById(req.params.id)
	})
	.then((student) => res.send(student))
	.catch(next);
});

api.put('/campus/:id', (req, res, next) => {
	Campus.update(req.body, {
		where: {
			id: req.params.id
		}
	})
	.then( campus => res.send(campus))
	.catch(next);
});

api.delete('/campus/:id', (req, res, next) => {
	Student.destroy({
		where: {
			campusId: req.params.id
		}
	})
	.then( (affectedRows) => {
		console.log('Deleted ' + affectedRows + ' row from students belonging to campus ' + req.params.id);
		Campus.destroy({
			where: {
				id: req.params.id
			}
		})
	})
	.then((affectedRows) => console.log('Deleted ' + affectedRows + ' row from campuses table with id= ' + req.params.id))
	.catch(next);
});

api.delete('/student/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
	.then( affectedRows => console.log('Deleted ' + affectedRows + ' rows from students table with id= ' + req.params.id))
	.catch(next);
})

module.exports = api
