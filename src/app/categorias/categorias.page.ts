import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { MoviesService } from '../services/services/movies.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  generos;
  datosUsuario = null;

  constructor(private navCtrl: NavController, private moviesService: MoviesService, public loadingController: LoadingController,
              private storage: Storage) { }

  async ngOnInit() {
    this.datosUsuario = await this.storage.get('datos');
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 1000);

  }

  back(){
    this.navCtrl.back({animated: true});
  }

  selectGenre(name,ev){
    const email = this.datosUsuario.mail;
    const params = {
      mail: email,
      genreName: name
    };
  }

  aceptar(){
    this.navCtrl.navigateRoot('/');
  }

}
