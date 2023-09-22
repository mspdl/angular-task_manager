import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  LOCAL_TASKS = 'tasks';

  constructor() {}

  getAllTasks(): Task[] {
    const tasks = localStorage[this.LOCAL_TASKS];
    return tasks ? JSON.parse(tasks) : [];
  }

  createTask(task: Task): void {
    const currentTasks = this.getAllTasks();
    task.id = new Date().getTime();
    currentTasks.push(task);
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }

  getTaskById(taskId: number): Task {
    const currentTasks: Task[] = this.getAllTasks();
    return currentTasks.find((task) => (task.id = taskId));
  }

  updateTask(updatedTask: Task): void {
    const currentTasks: Task[] = this.getAllTasks();
    /* Teacher's method
    updatedTasks.forEach((task, index, tasks) => {
      if (updatedTask.id === task.id) {
        tasks[index] = updatedTask;
      }
    });
    */
    const foundTaskIndex = currentTasks.findIndex(
      (task) => task.id == updatedTask.id
    );
    if (foundTaskIndex >= 0) {
      currentTasks[foundTaskIndex] = updatedTask;
    }
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }

  removeTask(taskId: number) {
    const currentTasks: Task[] = this.getAllTasks();
    const updatedTasks = currentTasks.filter((task) => task.id !== taskId);
    localStorage[this.LOCAL_TASKS] = JSON.stringify(updatedTasks);
  }

  changeTaskStatus(taskId: number) {
    const currentTasks: Task[] = this.getAllTasks();
    /* Teacher's method
    updatedTasks.forEach((task, index, tasks) => {
      if (updatedTask.id === task.id) {
        tasks[index] = updatedTask;
      }
    });
    */
    const foundTask = currentTasks.find((task) => task.id == taskId);
    if (foundTask) {
      currentTasks[foundTask.id].isDone = !foundTask.isDone;
    }
    localStorage[this.LOCAL_TASKS] = JSON.stringify(currentTasks);
  }
}
