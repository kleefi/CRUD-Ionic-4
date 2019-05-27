import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { AddDataPage } from '../modal/add-data/add-data.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public items:any=[];

  constructor(public http:HttpClient, private modalController:ModalController) {
  	this.loadData();
  }

  loadData(){
  	let data:Observable<any>;
  	data = this.http.get('http://localhost/slim/public/views');
  	data.subscribe(result=>{
  		this.items = result.data
  		console.log(this.items);
  	})
  }

  async tambahData() {
    const modal = await this.modalController.create({
      component: AddDataPage,
      componentProps: {}
    });
    return await modal.present();
  }

  detailItem(){
    console.log(this.items[0].nama_barang);
  }

  

}
