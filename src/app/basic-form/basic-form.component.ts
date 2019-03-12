import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  myForm: FormGroup; // the class of the whole group form

  constructor(private fb: FormBuilder) { } // build forms easier

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message:'',
      career: ''
    })
    this.myForm.valueChanges.subscribe(console.log) // value Changes returns an observable
  }

}
