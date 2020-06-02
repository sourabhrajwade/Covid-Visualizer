import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-info',
  templateUrl: './states-info.component.html',
  styleUrls: ['./states-info.component.css']
})
export class StatesInfoComponent implements OnInit {
  formStates: FormGroup;
  public StateList;
  constructor(private fb: FormBuilder) {
    this.formStates = this.fb.group({
      select: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

}
