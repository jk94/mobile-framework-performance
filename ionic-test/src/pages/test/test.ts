import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
 Generated class for the Test page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
             selector : 'page-test',
             templateUrl : 'test.html'
           })
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  amount: number;
  items: any = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  ionViewWillEnter() {
    this.items = [];
  }

  fillItems() {
    console.log(this.amount);
    this.amount = Math.abs(this.amount);
    this.items  = [];
    for (let index = 0; index < this.amount; index++) {
      this.items.push({ title : 'Some Text', index : index });
    }
  }

  public identify(index, item) {
    return item.index;
  }

}
