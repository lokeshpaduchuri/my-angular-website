import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, AbstractControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import { MailerService } from '../shared/services/mailer.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  myForm: FormGroup= new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });;

  firstNameError = "Hold on there! First names can't be invisible. Give us a peek, pretty please?";
  lastNameError = "Warning: Last names are essential here. We seem to have misplaced yours – help us locate it!";
  emailError = "Email MIA! Help us break the silence by dropping your email address into the mix.";
  emailValidationError = "Oh snap! Your email is tap dancing on the wrong keys. Time for a graceful redirect!";
  messageError = "Message in a bottle? Your words are taking a sea adventure. Bring them back to shore!";

  constructor(private formBuilder: FormBuilder, private mailerService: MailerService) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
      // this.mailerService.sendMail(this.myForm.value.firstName +' '+this.myForm.value.lastName, this.myForm.value.email, this.myForm.value.message)
      //   .then(() => {
      //     console.log('Email sent successfully');
      //     // Optionally, reset the form or show a success message
      //     this.myForm.reset();
      //   })
      //   .catch(error => {
      //     console.error('Error sending email:', error);
      //     // Optionally, show an error message
      //   });
    } else {
      // Handle form validation errors
      console.error('Form is invalid. Please check the fields.');
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  getErrorMessage(data: any) {
    if (data.hasError('required')) {
      return this.emailError;
    }

    return data.hasError('email') ? this.emailValidationError : '';
  }
}
