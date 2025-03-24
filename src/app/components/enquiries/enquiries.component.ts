import { Component } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css'],
})
export class EnquiriesComponent {
  email: string = '';
  feedback: string = '';
  successMessage: string = '';

  constructor(private enquiryService: EnquiryService) {}

  submitEnquiry() {
    this.enquiryService.submitEnquiry({
      email: this.email,
      feedback: this.feedback,
    });
    this.successMessage = 'Your enquiry has been submitted!';
    this.email = '';
    this.feedback = '';
  }
}
