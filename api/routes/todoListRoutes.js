'use strict';
module.exports = function(router) {
  var todoList = require('../controllers/todoListController');
  // todoList Routes
  router
    .get('/tasks',todoList.list_all_tasks)
  //   .post(todoList.create_a_task);

  router.get('/', function (req, res) {
      console.log('router');
      res.json({ message: "hello api" });
  });

  // router
  //   .get(todoList.read_a_task)
  //   .put(todoList.update_a_task)
  //   .delete(todoList.delete_a_task);
};
