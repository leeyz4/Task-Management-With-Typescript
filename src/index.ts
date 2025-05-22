class User{
    constructor(public id: number, public name: string, public age: number) {}
}

class Task{
    constructor(
        public id: number,
        public title: string,
        public assignedTo?: User 
    ) {}
}

class TaskManager {
    private users: User[] = [];
    private tasks: Task[] = [];

   createUser(id: number, name: string, age: number): User{
    const user = new User(id, name, age);
    this.users.push(user);
    return user;
   }

   createTask(id: number, title: string): Task{
    const task = new Task(id, title);
    this.tasks.push(task);
    return task;
}

   getAllUsers(): User[]{
    return this.users;
   }

   getAllTasks(): Task[]{
    return this.tasks;
}

   getUsersByID(id: number): User | undefined{
    return this.users.find(user => user.id === id);
   }

   getUsersByAge(age: number): User | undefined{
    return this.users.find(user => user.age === age);
   }

   getTaskByID(id: number): Task | undefined {
    return this.tasks.find((task) => task.id === id);
    
    }

   updateUser(id: number, updateDetails:{name: string, age: number}): boolean{
     const user = this.getUsersByID(id);
        if(user) {
            user.name = updateDetails.name;
            user.age = updateDetails.age;
            return true;
        }
        return false;
    }

    deleteUser(id: number): boolean{
        const userIndex = this.users.findIndex(user => user.id === id);
        if(userIndex !== -1){
            this.users.splice(userIndex, 1);
            return true;
        }

        return false;
    }

    updateTask(id: number, newTitle: string) : boolean {
        const task = this.getTaskByID(id);
        if (task) {
          task.title = newTitle;
          return true;
        }
        return false;
      }
    
      deleteTask(id: number): boolean {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex !== -1) {
          this.tasks.splice(taskIndex, 1);
          return true;
        }
        return false;
      }
    
      assignTask(taskId: number, userId: number): boolean {
        const task = this.getTaskByID(taskId);
        const user = this.getUsersByID(userId);
        if (task && user) {
            task.assignedTo = user;
            return true;
        }
            return false;
    }
    
      unassignTask(taskId: number): boolean {
        const task = this.getTaskByID(taskId);
        if (task) {
          task.assignedTo = undefined;
          return true;
        }
        return false;
      }
    
      getTasksByUser(userId: number): Task[] {
        return this.tasks.filter(task => task.assignedTo?.id === userId);
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
    