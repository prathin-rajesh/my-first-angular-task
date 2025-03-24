import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  positionsLeft: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4500/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
  submitEnquiry(enquiry: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/enquiries`, enquiry);
  }

  getEnquiries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/enquiries`);
  }
}
