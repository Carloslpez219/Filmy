import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavController } from '@ionic/angular';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/services/movies.service';
import { PeliculaPage } from '../pelicula/pelicula.page';
import { Storage } from '@ionic/storage';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  slideOpts = {
    slidesPerView: 1.7,
    freeMode: true
  };
  
  resizeObservable: any;
  resizeSubscription: any;
  
  slideOpts2 = {
    slidesPerView: 2.5,
    freeMode: true
  };
  peliculasRecientes: Pelicula[] = [];
  pelicularPopulares: Pelicula[] = [];
  pelicularNext: Pelicula[] = [];
  pelicularTrend: Pelicula[] = [];
  videos=[];
  datosUsuario = null;
  pelicula;
  email = null;
  viewEntered = false;
  params = null;

  public carouselConfig: any = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };  

  constructor(private moviesService: MoviesService, private modalController: ModalController,
              private loadingController: LoadingController, private storage: Storage, private navController: NavController,
              private sanitizer: DomSanitizer, private platform: Platform) {
                this.resizeObservable = fromEvent(window, 'resize');
                this.resizeSubscription = this.resizeObservable.subscribe(() => {
                  this.updateSlideOptions();
                });
              }


  async ionViewWillEnter(){
    await this.storage.create();
    this.datosUsuario = await this.storage.get('datos');
    this.email = await this.datosUsuario.mail;
  }

  updateSlideOptions() {
  const width = this.platform.width();
  if (width >= 768) {
    this.slideOpts.slidesPerView = 3;
  } else if (width >= 576) {
    this.slideOpts.slidesPerView = 2;
  } else {
    this.slideOpts.slidesPerView = 1.7;
  }
}

  async ngOnInit() {
    setTimeout(async () => {
      this.loadingController.dismiss();
      this.viewEntered = true;
    }, 800);

    this.getFeature();
    this.getPopulares();
    this.getNext();
    this.getTrending();
  }

  getPopulares() {
    this.moviesService.getPopulary()
    .subscribe( resp => {
      console.log(resp);
      const arrTemp = [ ...this.pelicularPopulares, ...resp.results ];
      this.pelicularPopulares = arrTemp;
    });
  }

  getFeature(){
    this.moviesService.getFeature()
    .subscribe( resp => {
      console.log(resp);
      this.peliculasRecientes = resp.results;
    });
  }

  getNext(){
    this.moviesService.getNext()
    .subscribe( resp => {
      console.log(resp);
      this.pelicularNext = resp.results;
    });
  }

  getTrending(){
    this.moviesService.getTrending()
    .subscribe( resp => {
      console.log(resp);
      this.pelicularTrend = resp.results;
    });
  }

  cargarMas() {
    this.getPopulares();
  }

  logout(){
    this.storage.clear();
    this.navController.navigateRoot('/login');
  }

  async presentModalPelicula(pelicula){
    const modal = await this.modalController.create({
      component: PeliculaPage,
      backdropDismiss: false,
      componentProps: { pelicula }
    });
    await modal.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cargando...'
    });
    await loading.present();
  }

}
