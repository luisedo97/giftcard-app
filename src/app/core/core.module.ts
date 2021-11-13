import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from './services/toast.service';
import { GlobalService } from './services/global.service';
import { SessionService } from './services/session.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ToastService,
    GlobalService,
    SessionService
  ]
})
export class CoreModule { }
