import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.myForm.valid) {
      // Process the form data here (e.g., send it to a server)
      console.log('Form submitted:', this.myForm.value);
    } else {
      // Handle form validation errors
      console.error('Form is invalid. Please check the fields.');
    }
  }
}
