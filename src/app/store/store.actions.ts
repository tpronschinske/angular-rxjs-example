import { Action } from '@ngrx/store';

export const REGISTRATION = '[ACTION] REGISTRATION';
export const MENU = '[ACTION] MENU';
export const DEVICE = '[ACTION] DEVICE';
export const USER = '[ACTION] USER';

export class Registration implements Action {
  readonly type = REGISTRATION;
  constructor(public payload: string){
  }
}

export class Menu implements Action {
  readonly type = MENU;
  constructor(public payload: string){
  }
}

export class Device implements Action {
  readonly type = DEVICE;
  constructor(public payload: string){
  }
}

export class User implements Action {
  readonly type = USER;
  constructor(public payload: string){
  }
}

export type All = Registration | User | Device | Menu;
