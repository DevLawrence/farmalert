import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';
import {TabsPage} from '../tabs/tabs'; 

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if(localStorage.getItem('userData')){
      this.navCtrl.setRoot(TabsPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

   login(){
    this.navCtrl.push(LoginPage, {}, {animate:false});
  }

   signup(){
    this.navCtrl.push(SignupPage, {}, {animate:false});
  }

}
