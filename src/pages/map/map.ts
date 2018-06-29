import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider) { /** Inyección del AuthProvider */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  //Método para cerrar la sesión del usuario activo
  logoutSession() {
    this.auth.logout(); //Llamado a la función logout del provider creado
  }

}
