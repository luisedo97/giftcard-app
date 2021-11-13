import { EventEmitter, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;
  isInitialized: boolean = false;
  onInitialized: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.isInitialized = true;
    this.onInitialized.emit(true);
  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string, defaultValue: any = null) {
    try{
      return await this._storage?.get(key);
    }catch(e){
      console.error(e);
      return defaultValue;
    }
      
  }

}
