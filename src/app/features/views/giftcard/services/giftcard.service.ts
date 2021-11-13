import { Injectable } from '@angular/core';
import { Code } from 'src/app/features/interfaces/code';
import { Giftcard } from 'src/app/features/interfaces/giftcard';

@Injectable({
  providedIn: 'root'
})
export class GiftcardService {

  private giftcards: Giftcard[] = [];

  constructor() { 
    console.log('Servicio de Giftcard creado');
  }

  /* Giftcard */
  /**
   * @param giftcard | Parametros de una giftcard para anexar a la lista
   */
  saveGiftcard(giftcard: Giftcard){
    let options: Giftcard = {
      id: this.giftcards.length + 1,
      codes: [],
      name: '',
      description: '',
      typeGiftcardId: 1
    }

    giftcard = {
      ...options,
      ...giftcard
    }

    this.giftcards.push(giftcard);
  }


  /**
   * 
   * @param giftcardNew | Recibo los datos de la nueva giftcard, para remplazarlo
   */
  updateGiftcard(giftcardNew: Giftcard){
    for(let giftcardOld of this.giftcards){
      if(giftcardOld.id == giftcardNew.id){
        giftcardOld.name = giftcardNew.name;
        giftcardOld.description = giftcardNew.description;  
      }
    }
  }

  /**
   * @param id | Id del giftcard
   */
  deleteGiftcard(id: number){
    this.giftcards = this.giftcards.filter((giftcard)=>{
      return giftcard.id != id;
    });
  }


  /**
   * @returns | Retorna una lista de giftcards
   */
  getGiftcards(): Giftcard[]{
    return this.giftcards;
  }


  /**
   * 
   * @param id | Id del giftcard
   * @returns Retorna la giftcard en cuestion
   */
  getGiftcardById(id: number): Giftcard{
    return this.giftcards.find((giftcard)=>{
      return giftcard.id == id;
    });
  }

  /**
   * 
   * @param code | Codigo de la giftcard
   * @returns Retorna la giftcard en cuestion apartir de un codigo
   */
  getGiftcardByCode(code: string): Giftcard{
    let giftcard_id = +code.split('-')[0] - 1000;
    let giftcard = this.getGiftcardById(giftcard_id);
    
    if(!giftcard){
      throw 'No existe este giftcard';
    }

    return giftcard
  }

  /* END Giftcard */

  /* Codes */
  /**
   * 
   * @param giftcard_id | Id del giftcard
   */
  createCode(giftcard_id: number){

    let giftcard = this.getGiftcardById(giftcard_id);

    if(!giftcard){
      alert('No existe este giftcard');
      throw 'No existe este giftcard'
    }

    let exist: boolean;
    let code = this.generateCode(giftcard_id);

    do{
      exist = false;
      for(let code_giftcard of giftcard.codes){
        if(code_giftcard.code == code){
          exist = true;
          code = this.generateCode(giftcard_id);
          break;
        }
      }        
    }while(exist);

    giftcard.codes.push({
      id: giftcard.codes.length + 1,
      code: code,
      used: false,
      giftcard_id: giftcard_id
    });

  } 

  /**
   * 
   * @param giftcard_id | Id del giftcard para generar el codigo
   * @returns retorna el codigo
   */
  generateCode(giftcard_id: number): string{
    //Generate giftcard code
    let code = (giftcard_id+1000)+'-';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;

    for(let i = 0; i < 12; i++){
      if(i == 4 || i == 8)
        code += '-';
      code += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return code;
  }

  /**
   * 
   * @param code | Retorna toda la informacion de un codigo apartir de su codigo
   * @returns 
   */
  getCode(code: string){
    let giftcard = this.getGiftcardByCode(code);
    for(let code_giftcard of giftcard.codes){
      if(code_giftcard.code == code){
        return code_giftcard;
      }
    }
    return null;
  }  
  /* END Codes */


}
