import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export interface ILisencePlate {
  country: string;
  plate: string;
}

const initialState: ILisencePlate[] = [
  {
    country: 'USA',
    plate: '1234ACD'
  },
];

export const addPlate = createAction('[PLATE] add plate', props<ILisencePlate>())

export const plateReducer = createReducer(
  initialState,
  on(
    addPlate,
    (state, { country, plate }) => ([...state, { country, plate }])
  )
);

const selectLisencePlateFeature = createFeatureSelector<ILisencePlate[]>('plates');

export const selectLisencePlates = createSelector(
  selectLisencePlateFeature,
  (state: ILisencePlate[]) => state
)
