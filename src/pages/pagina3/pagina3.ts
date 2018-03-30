import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    console.log(navParams);
    this.mutante = this.navParams.get("personaje");
  }

  irAtras(){
    this.navCtrl.pop();
  }

  irRoot(){
    this.navCtrl.popToRoot();
  }

}
