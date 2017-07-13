"use strict";

module.exports = function (app) {
	let todoList = require('../controllers/todoListController');

	// Routes
	app.route('/tasks')
		.get(todoList.listAllTasks)
		.post(todoList.createATask);

	app.route('/tasks/:taskId')
		.get(todoList.readATask)
		.put(todoList.updateATask)
		.delete(todoList.deleteATask);
}