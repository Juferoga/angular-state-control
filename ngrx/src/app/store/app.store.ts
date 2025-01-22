import { ActionReducerMap } from "@ngrx/store";
import { ILisencePlate, plateReducer } from "./plate.store";

export interface AppState {
  plates: ILisencePlate[];
}

export const appReducers: ActionReducerMap<AppState> = {
  plates: plateReducer
};
