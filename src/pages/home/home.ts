import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FcaBle } from '../../providers/fca-ble';
declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public ble: FcaBle, public navCtrl: NavController) {

  }

  test() {
    debugger;
    this.ble.coolMethod("test 1", function (message) {
      console.log(message);
    }, function(error) {
      console.log(error);
    });

    cordova.plugins.FCABLE.coolMethod("test", function (message) {
      console.log(message);
    }, function(error) {
      console.log(error);
    });
  }

}
