
import { tassign } from 'tassign';
import * as Actions from './store.actions';

export type Action = Actions.All;


export interface IAppState {
  app: {
    DeviceRegistered: boolean;
    ApiUrl: string;
    PanatrackerVersion: string;
    DeviceKey: string;
    DeviceId: string;
    Username: string;
    UserKey: string;
    Authenticated: boolean;
    MenuItems: any[];
    lastUpdated: Date
  }
}

export const InitialState: IAppState = {
  app: {
    DeviceRegistered: false,
    ApiUrl: 'TEST',
    PanatrackerVersion: '',
    DeviceKey: '',
    DeviceId: '',
    Username: '',
    UserKey: '',
    Authenticated: false,
    MenuItems: [],
    lastUpdated: null
  }
}

const newState = (state, data) => {
  return tassign(state, data);
}

export function reducer(state: IAppState = InitialState, action: Action): IAppState{
  console.log(state);
  console.log(action.type);
  switch(action.type){
    case Actions.REGISTRATION:
      const updatedState = newState(state, { ApiUrl: action.payload });
      console.log(updatedState);
      return updatedState;

    default:
      return state
  }

}


