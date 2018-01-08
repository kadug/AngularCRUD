import { Component, OnInit } from '@angular/core';

import { Dog } from '../../models/dogs';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dog: Dog = {
    name: '',
    raza: ''
  }
  constructor(public dogService: DogService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.dog.name != '' && this.dog.raza != ''){
      this.dogService.addDog(this.dog);
      this.dog.name = '';
      this.dog.raza = '';
    }
  }

}
