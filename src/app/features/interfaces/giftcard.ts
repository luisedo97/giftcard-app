import { AbstractControl, FormGroup } from "@angular/forms";
import { Code } from "./code";

type typeGiftcardId = 1 | 2 | 3; // 1: Giftcard, 2: Giftcard_v2, 3: Giftcard_v3

export interface Giftcard {
    id: number;
    name: string;
    description: string;
    typeGiftcardId: typeGiftcardId;
    createdAt?: Date;
    updatedAt?: Date;
    codes?: Code[];
}

export interface FormGroupGiftcard extends FormGroup{
    value: Giftcard;
    controls: {
        id?: AbstractControl,
        name: AbstractControl,
        description: AbstractControl,
        typeGiftcardId: AbstractControl
    }
}