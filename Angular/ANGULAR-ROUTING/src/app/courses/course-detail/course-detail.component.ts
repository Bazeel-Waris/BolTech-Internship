import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy{
    selectedCourse: Course;
    courseId: number;

    courseService: CourseService = inject(CourseService)
    activeRoute: ActivatedRoute = inject(ActivatedRoute);
    paramMapObs;

    ngOnInit() {
      // this.courseId = +this.activeRoute.snapshot.params['id'];
      // this.courseId = +this.activeRoute.snapshot.paramMap.get('id');
      this.paramMapObs = this.activeRoute.paramMap.subscribe(data => {
        console.log(data.get('id'));       
        // this.courseId = +data['id'];       
        this.courseId = +data.get('id');       
        this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)
      });
      // this.activeRoute.params.subscribe()
    }

    ngOnDestroy() {
      this.paramMapObs.unsubscribe();
    }
}
