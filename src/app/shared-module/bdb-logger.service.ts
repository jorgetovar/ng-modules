import { Injectable } from '@angular/core';

@Injectable()
export class BdbLoggerService {

  private x = {};

  constructor() { }

  getTitle(key: string): string {
    console.log(key);
    const val = 'Ty Dolla $ign';
    this.x[key] = val;
    return val;
  }
}
