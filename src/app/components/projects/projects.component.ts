import { Component, OnInit } from '@angular/core';
import { ApiService } from 'E:/angular-projects/angular-task/src/app/services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe(
      (data) => {
        console.log('Projects Data:', data);
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
