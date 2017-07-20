import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';

import {TabsPage} from '../tabs/tabs';
import {LoginPage} from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  responseData : any;
  userData = {"username":"", "password":"", "email":"", "name":""};

  constructor(public navCtrl: NavController, public authServiceProvider: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    //API connection
    // this.navCtrl.push(TabsPage);
    this.authServiceProvider.postData(this.userData, "signup").then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData))
      this.navCtrl.push(TabsPage);
    }, (err) => {
        //connection failed message
    });
   
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

}
