import { ModalContentPage } from './modal-content';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
    
    
    openModal(page) {
      let modal = this.modalCtrl.create(ModalContentPage, page);
    modal.present();
    }
  }
