import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dogs';
import { DogService } from '../../services/dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[];
  dogToEdit: Dog;
  editState: boolean = false;
  constructor(public dogService: DogService) { }

  ngOnInit() {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
  }

  deleteDog(event, dog){
    if(confirm('Are you sure you want to delete?')){
      this.dogService.deleteDog(dog);
    }
    return;
  }

  editDog(event, dog) {
    this.editState = !this.editState;
    this.dogToEdit = dog;
  }

  updateDog(dog){
    this.dogService.updateDog(dog);
    this.dogToEdit = null;
    this.editState = false;
  }

}
