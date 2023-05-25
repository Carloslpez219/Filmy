import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '../services/services/movies.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
  styleUrls: ['./pelicula.page.scss'],
})
export class PeliculaPage implements OnInit {

  @Input() pelicula;
  viewEntered = false;

  liked;
  movies;
  exist = false;
  datosUsuario = null;
  video = '';


  constructor(private modalController: ModalController, private moviesService: MoviesService, private storage: Storage) { }

  async ionViewWillEnter(){
    this.datosUsuario = await this.storage.get('datos');
    const email = await this.datosUsuario.mail;
    const params = await {
      mail: email,
      movieName: this.pelicula.original_title
    };
    this.getVideos(this.pelicula.id);
  }

  async ngOnInit() {
  }

  getVideos(id){
    this.moviesService.getVideo(id)
      .subscribe( async (resp: any) => {
        const videoKey = resp.results[0]?.key ?? '';
        this.video = `https://www.youtube.com/watch?v=${videoKey}`;
      });
  }

  async ionViewDidEnter() {
    this.viewEntered = true;
  }

  ionViewWillLeave(){
    this.viewEntered = false;
  }

  async back(){
    this.modalController.dismiss();
  }

}
