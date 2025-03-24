import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-admin-enquiries',
  templateUrl: './admin-enquiries.component.html',
  styleUrls: ['./admin-enquiries.component.css'],
})
export class AdminEnquiriesComponent implements OnInit {
  enquiries: any[] = [];

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.enquiries = this.enquiryService.getEnquiries();
  }
}
