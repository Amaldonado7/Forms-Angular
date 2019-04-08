import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, first } from 'rxjs/operators';


@Component({
  selector: 'submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss']
})
export class SubmitFormComponent implements OnInit {
  myForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  // How to submit the form to a backend database, using cloud firestore which is a document data base

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;

    try {
      this.afs.collection('contacts').add(formValue);
      this.success = true;
    } catch(err) { // errores que puedan surgir en el backend
      console.error(err)
    }
    this.loading = false;
  }


}
