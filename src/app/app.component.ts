import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskManaging';

  tasks: Task[] = [
    new Task('Napisać raport', 0, false),
    new Task('Posprzątać biurko', 2, false),
    new Task('Przygotować prezentację', 1, false)
  ];

  deleteTask = (index: number) => {
    this.tasks.splice(index, 1);
    return;
  }

  isMenuOpen: boolean = false;

  addTitle: string = "";
  addPrio: string = "low";
  readyToAdd: boolean = false;


  checkAdding = () => {
    console.log(this.addTitle);
    if (this.addTitle.length < 1) this.readyToAdd = false;
    else this.readyToAdd = true;
  }

  toggleMenu = () => {
    if (this.isMenuOpen)
      this.isMenuOpen = false;
    else this.isMenuOpen = true;
  };

  addTask = () => {
    let prio = 0;
    switch (this.addPrio) {
      case "low":
        prio = 2;
        break;
      case "mid":
        prio = 1;
        break;
      case "high":
        prio = 0;
        break;
    }

    let task = new Task(this.addTitle, prio, false);
    this.tasks.push(task);
  };


}

class Task {
  title: string = "";
  priority: number = 2;
  status: boolean = false;

  constructor(title: string, priority: number, status: boolean) {
    this.title = title;
    this.priority = priority;
    this.status = status;
  }

  finishTask() {
    this.status = true;
  }
}
