import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogComponent } from './components/dog/dog.component';
import { environment } from '../environments/environment';
import { DogService } from './services/dog.service';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogComponent, 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'RegistroAnimales'), 
  ],
  providers: [ DogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
