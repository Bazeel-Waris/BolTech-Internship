import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/Student";

@Pipe({
     name: 'filter'
})
export class FilterPipe implements PipeTransform {
     transform(list: Student[], filterBy: string) {
          console.log('FILTER PIPE GETS CALLED!');
          
          if(filterBy.toLowerCase() === 'all' || filterBy.toLowerCase() === '' || list.length === 0) 
               return list;
          else
               return list.filter(std => std.gender.toLowerCase() === filterBy.toLowerCase());
     }
}