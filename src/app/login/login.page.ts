import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NavController, LoadingController} from '@ionic/angular';
import { AlertService } from '../services/services/alert.service';
import { UserService } from '../services/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mail = '';
  pass = '';


  constructor(private navCtrl: NavController, private userService: UserService, public loadingController: LoadingController,
              private alertService: AlertService, private storage: Storage) {
              }

  ngOnInit() {}


  async datosLocalStorage(){
    await this.storage.create();
    await this.storage.clear();
    const data = await {
      mail: this.mail
    };
    await this.storage.set('datos', data);
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

  async login(){
    await this.presentLoading();

    if(this.mail === 'usuarioprueba@gmail.com' && this.pass === 'admin'){
      await this.datosLocalStorage();
      await this.navCtrl.navigateRoot('/');
    }else{
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 500);
      this.mail = '';
      this.pass = '';
      this.alertService.presentToast('Usuario o contrasena incorrecta.','danger',3000);
    }
  }

  goRegister(){
    this.navCtrl.navigateForward('/registro');
  }

}

