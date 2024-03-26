import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Task } from "../Models/Task";
import { map } from "rxjs";

@Injectable({
     providedIn: 'root',
})
export class TaskService {

     http: HttpClient = inject(HttpClient);

     createTask(data: Task) {
          console.log(data);
          const headers = new HttpHeaders({'ahmad-header': 'Ideology'});
          this.http.post<{name: string}>('https://angular-bazeel-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks.json',
          data, { headers: headers }).subscribe((res) => {
               console.log(res);
               // this.fetchAll();
          });
     }

     updateTask(id, data: Task) {
          this.http.put('https://angular-bazeel-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks/'+ id +'.json', data)
          .subscribe();
     }

     deleteTask(id: string) {
          this.http.delete('https://angular-bazeel-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks/'+ id +'.json')
          .subscribe();
     }

     fetchAllTasks() {
          return this.http.get<{ [key: string]: Task }>('https://angular-bazeel-default-rtdb.asia-southeast1.firebasedatabase.app/Tasks.json')
               .pipe(map((response) => {
               // Transforming Data
               let tasks = [];

               for (let key in response) {

                    if(response.hasOwnProperty(key)) {
                    tasks.push({ ...response[key], id: key })                          
                    }
               }

               return tasks;
          }))
     }
}