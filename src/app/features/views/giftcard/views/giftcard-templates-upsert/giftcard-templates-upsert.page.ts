import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { FormGroupGiftcard, Giftcard } from 'src/app/features/interfaces/giftcard';
import { GiftcardService } from '../../services/giftcard.service';

@Component({
  selector: 'app-giftcard-templates-upsert',
  templateUrl: './giftcard-templates-upsert.page.html',
  styleUrls: ['./giftcard-templates-upsert.page.scss'],
})
export class GiftcardTemplatesUpsertPage implements OnInit {

  giftcardForm: FormGroupGiftcard;

  constructor(
    private _formBuilder: FormBuilder,
    private _giftcardService: GiftcardService,
    private _toastService: ToastService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.giftcardForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.maxLength(255)]),
      typeGiftcardId: new FormControl(null, [Validators.required])
    }) as FormGroupGiftcard;
  }

  saveGiftcard() {

    if(this.giftcardForm.valid) {
      this._giftcardService.saveGiftcard(this.giftcardForm.value);
      this._router.navigate(['/template']);
    }else{
      this._toastService.presentToast({
        message: '¡Comprueba los errores!',
        color: 'danger'
      });
    }

  }

}
