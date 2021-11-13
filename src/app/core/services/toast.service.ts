import { Injectable } from '@angular/core';
import { ToastController, ToastOptions} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toast: HTMLIonToastElement

  constructor(
    public toastController: ToastController
  ) { }

  async presentToast(options: ToastOptions) {
    if(this.toast)
      this.toast.dismiss();

      this.toast = await this.toastController.create({
        message: options.message,
        duration: options.duration || 2000,
        color: options.color || 'light',
      });
      
      this.toast.present();
    
  }

}
