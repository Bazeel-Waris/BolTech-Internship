import { Component, Input, OnInit, inject } from '@angular/core';
import { Task } from '../Models/Task';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
     showCreateTaskForm: boolean = false;
     allTasks: Task[] = [];
     taskService: TaskService = inject(TaskService);

     editMode: boolean = false;
     selectedTask: Task;
     isLoading: boolean = false;
     errorMessage: string | null = null;

     constructor(private http:HttpClient){}

     ngOnInit() {
          this.fetchAll();
     }

     OpenCreateTaskForm(){
          this.showCreateTaskForm = true;
          this.editMode = false;

     }
     
     CloseCreateTaskForm(){
          this.showCreateTaskForm = false;
     }
     
     onEditBtnClicked(id: string) {
          this.showCreateTaskForm = true;
          this.editMode = true;
          this.selectedTask = this.allTasks.find(task => task.id === id);
     }

     createOrUpdateTask(data: Task) {
          // this.editMode = false;
          if(this.editMode) {
               this.taskService.updateTask(this.selectedTask.id, data);
          } else {
               this.taskService.createTask(data);
          }
     }

     private fetchAll() {
          this.isLoading = true;

          this.taskService.fetchAllTasks().subscribe({next: (tasks) => {
               this.allTasks = tasks;
               this.isLoading = false;
          }, error: (error) => {
               this.setErrorMessage(error);
               this.isLoading = false;
              
          }
     });
     }

     private setErrorMessage(err: HttpErrorResponse) {
          if(err.error.error === 'Permission denied') {
               this.errorMessage = 'You don\'t have Permission to Access TASKS!';
          }
          setTimeout(() => {
               this.errorMessage = null;
          }, 3000);
          
     }

     fetchAllTasks() {
          this.fetchAll();
     }

     onDelete(taskId: string) {
          this.taskService.deleteTask(taskId);          
     }
}
