import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.page.html',
  styleUrls: ['./add-data.page.scss'],
})
export class AddDataPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async closePage(){
    await this.modalController.dismiss()
  }

}
