"use strict";
class User {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Task {
    constructor(id, title, assignedTo) {
        this.id = id;
        this.title = title;
        this.assignedTo = assignedTo;
    }
}
class TaskManager {
    constructor() {
        this.users = [];
        this.tasks = [];
    }
    createUser(id, name, age) {
        const user = new User(id, name, age);
        this.users.push(user);
        return user;
    }
    createTask(id, title) {
        const task = new Task(id, title);
        this.tasks.push(task);
        return task;
    }
    getAllUsers() {
        return this.users;
    }
    getAllTasks() {
        return this.tasks;
    }
    getUsersByID(id) {
        return this.users.find(user => user.id === id);
    }
    getUsersByAge(age) {
        return this.users.find(user => user.age === age);
    }
    getTaskByID(id) {
        return this.tasks.find((task) => task.id === id);
    }
    updateUser(id, updateDetails) {
        const user = this.getUsersByID(id);
        if (user) {
            user.name = updateDetails.name;
            user.age = updateDetails.age;
            return true;
        }
        return false;
    }
    deleteUser(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            this.users.splice(userIndex, 1);
            return true;
        }
        return false;
    }
    updateTask(id, newTitle) {
        const task = this.getTaskByID(id);
        if (task) {
            task.title = newTitle;
            return true;
        }
        return false;
    }
    deleteTask(id) {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }
    assignTask(taskId, userId) {
        const task = this.getTaskByID(taskId);
        const user = this.getUsersByID(userId);
        if (task && user) {
            task.assignedTo = user;
            return true;
        }
        return false;
    }
    unassignTask(taskId) {
        const task = this.getTaskByID(taskId);
        if (task) {
            task.assignedTo = undefined;
            return true;
        }
        return false;
    }
    getTasksByUser(userId) {
        return this.tasks.filter(task => { var _a; return ((_a = task.assignedTo) === null || _a === void 0 ? void 0 : _a.id) === userId; });
    }
}
const manager = new TaskManager();
const user1 = manager.createUser(1, "Patt", 30);
const user2 = manager.createUser(2, "John", 25);
const user3 = manager.createUser(3, "Liz", 23);
const user4 = manager.createUser(4, "Ann", 32);
const user5 = manager.createUser(5, "Joy", 18);
const task1 = manager.createTask(11, "Revise for Maths");
const task2 = manager.createTask(12, "Complete the Html and Css work");
const task3 = manager.createTask(13, "Learn javascript");
const task4 = manager.createTask(14, "Practice public speaking");
manager.assignTask(11, 1);
manager.assignTask(12, 4);
manager.assignTask(13, 3);
manager.assignTask(14, 2);
manager.deleteUser(4);
manager.updateTask(13, "Learn javascript and do a project");
manager.unassignTask(14);
console.info("All Users:", manager.getAllUsers());
console.info("All Tasks:", manager.getAllTasks());
console.info("Tasks Assigned to:", user1.name, "-", manager.getTaskByID(user1.id));
function getTasksByUser(userId, number) {
    throw new Error("Function not implemented.");
}
