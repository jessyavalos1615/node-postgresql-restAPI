"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;
exports.getOneTask = getOneTask;
exports.getTaskByProject = getTaskByProject;

var _project = _interopRequireDefault(require("../models/project"));

var _tasks = _interopRequireDefault(require("../models/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectId, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            console.log(req.body);
            _context.next = 5;
            return _tasks["default"].create({
              projectId: projectId,
              name: name,
              done: done
            }, {
              fields: ['projectid', 'name', 'done']
            });

          case 5:
            newTask = _context.sent;
            res.json({
              message: 'New Task created'
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _createTask.apply(this, arguments);
}

;

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _tasks["default"].findAll({
              attributes: ['id', 'projectid', 'name', 'done'],
              order: [['id', 'DESC']]
            });

          case 2:
            tasks = _context2.sent;
            res.json({
              tasks: tasks
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTasks.apply(this, arguments);
}

function updateTask(_x5, _x6) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body2, projectid, name, done, task, updatedTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, projectid = _req$body2.projectid, name = _req$body2.name, done = _req$body2.done;
            _context3.prev = 2;
            _context3.next = 5;
            return _tasks["default"].findOne({
              attributes: ['name', 'projectid', 'done', 'id'],
              where: {
                id: id
              }
            });

          case 5:
            task = _context3.sent;
            _context3.next = 8;
            return _tasks["default"].update({
              name: name,
              done: done,
              projectid: projectid
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedTask = _context3.sent;
            res.json({
              message: 'Task Updated',
              updatedTask: updatedTask
            });
            _context3.next = 15;
            break;

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 12]]);
  }));
  return _updateTask.apply(this, arguments);
}

;

function deleteTask(_x7, _x8) {
  return _deleteTask.apply(this, arguments);
}

function _deleteTask() {
  _deleteTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, taskDeleted;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _tasks["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            taskDeleted = _context4.sent;
            res.json({
              message: 'Task Deleted'
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteTask.apply(this, arguments);
}

;

function getOneTask(_x9, _x10) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var id, task;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _tasks["default"].findOne({
              where: {
                id: id
              },
              attributes: ['id', 'projectid', 'name', 'done']
            });

          case 4:
            task = _context5.sent;
            res.json({
              task: task
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _getOneTask.apply(this, arguments);
}

;

function getTaskByProject(_x11, _x12) {
  return _getTaskByProject.apply(this, arguments);
}

function _getTaskByProject() {
  _getTaskByProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectid = req.params.projectid;
            _context6.prev = 1;
            _context6.next = 4;
            return _tasks["default"].findAll({
              attributes: ['id', 'projectid', 'name', 'done'],
              where: {
                projectid: projectid
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json({
              tasks: tasks
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _getTaskByProject.apply(this, arguments);
}

;