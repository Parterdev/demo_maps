//import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

  constructor(private fireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  //Función para el registro de usuarios
  registerUser(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        //El usuario se ha creado correctamente
      })
      .catch(err => Promise.reject(err))
  }

}

