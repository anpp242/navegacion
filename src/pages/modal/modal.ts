import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public viewCtrl: ViewController, 
              public navParams: NavParams) {
                
    this.nombre = this.navParams.get("nombre");
    this.nombre = this.navParams.get("edad");

    console.log(this.nombre);
  }

  cerrarParametros(){
    let data = {
      nombre: "Juan Carlos",
      edad: 25,
      coords: {
        lat: 10,
        lng: -10
      }
    }
    this.viewCtrl.dismiss( data );
  }

  cerrarSinParametros(){
    this.viewCtrl.dismiss();
  }


}
