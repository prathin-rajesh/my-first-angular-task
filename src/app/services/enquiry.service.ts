import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  private enquiries: { email: string; feedback: string }[] = [];

  constructor() {}

  submitEnquiry(enquiry: { email: string; feedback: string }) {
    this.enquiries.push(enquiry);
  }

  getEnquiries() {
    return this.enquiries;
  }
}
