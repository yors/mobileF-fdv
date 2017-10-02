import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import { User } from '../shared/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  user: User = new User();

  constructor(
    formBuilder: FormBuilder,
  ) {
 
  }

  ngOnInit() {
  }

  save() {
   /* result.subscribe(data => this.router.navigate(['users']));*/
  }
}
