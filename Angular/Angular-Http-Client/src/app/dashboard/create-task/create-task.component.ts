import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Models/Task';
import { TaskService } from 'src/app/Services/task.service';

@Component({
     selector: 'app-create-task',
     templateUrl: './create-task.component.html',
     styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

     taskService: TaskService = inject(TaskService);

     @Input() isEditMode: boolean = false;

     @Input() currentTask: Task;

     @Output()
     CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

     reactiveForm: FormGroup;

     @Output()
     emmitedTaskData: EventEmitter<Task> = new EventEmitter<Task>();

     ngOnInit() {
          if(!this.isEditMode) {
               this.reactiveForm = new FormGroup({
                    title: new FormControl(null, Validators.required),
                    description: new FormControl(null, Validators.required),
                    assignTo: new FormControl(null, Validators.required),
                    createdAt: new FormControl(null, Validators.required),
                    priority: new FormControl(null, Validators.required),
                    status: new FormControl(null, Validators.required),
               })
          } else {
               this.reactiveForm = new FormGroup({
                    title: new FormControl(this.currentTask.title, Validators.required),
                    description: new FormControl(this.currentTask.description, Validators.required),
                    assignTo: new FormControl(this.currentTask.assignTo, Validators.required),
                    createdAt: new FormControl(this.currentTask.createdAt, Validators.required),
                    priority: new FormControl(this.currentTask.priority, Validators.required),
                    status: new FormControl(this.currentTask.status, Validators.required),
               })
          }
     }

     onFromSubmitted() {
          this.emmitedTaskData.emit(this.reactiveForm.value);
          this.CloseForm.emit(false);
     }

     OnCloseForm() {
          this.CloseForm.emit(false);
     }

     displayAll() {
          this.taskService.fetchAllTasks();
     }
}
