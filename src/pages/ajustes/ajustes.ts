import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrarModal(){
    let modal = this.modalCtrl.create( ModalPage, { nombre: 'Omar', edad: 27 } );
    modal.present();
    modal.onDidDismiss( parametros =>{
      if( parametros ){
        console.log("Data del modal:");
        console.log( parametros );
      }else{
        console.log("Se cerró sin parametros");
      }
    } );
  }

}
