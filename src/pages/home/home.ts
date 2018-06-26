import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth'; //Importación de la clase Provider para la asignación de usuarios por email y contraseña.


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variable miembro 'user' que contendrá el email y contraseña del usuario.
  user = { email: '', password: '' };

  constructor(
    public alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider
  ) {

  }

  //Function Alert
  showAlert() {
    let alert=this.alertCtrl.create({
      title: 'Opps!',
      subTitle: 'Función en construcción...',
      buttons: ['OK']
    });
    alert.present();
  }

  //Function signin for user
  signin(){
    this.auth.registerUser(this.user.email, this.user.password) //Llamada al método registerUser. 
    .then((user)=> {
      //El usuario se ha creado correctamante
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }


}
