import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './services/toast.service';
import { GlobalService } from './services/global.service';
import { SessionService } from './services/session.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    ToastService,
    GlobalService,
    SessionService,
    StorageService
  ]
})
export class CoreModule { }
