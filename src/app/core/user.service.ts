import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  constructor(public userName: string){

  }
}

@Injectable()
export class UserService {
  id = nextId++;
  private _userName = 'Default service...';

  constructor(@Optional() config: UserServiceConfig) {
    console.log(`loaded with ${config}`);
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }


}
