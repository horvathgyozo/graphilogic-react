import * as core from '../core/index';

// console.log(core);

const abra = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
];

const initialState = {
  abra,
  matrix: core.abrabolMatrix(abra),
};

// console.log(initialState);

function copy(state) {
  return JSON.parse(JSON.stringify(state));
}

export default function reducer(state = initialState, action) {
  const newState = copy(state);
  switch (action.type) {
    case 'CHANGE_CELL':
      newState.matrix = core.valtoztat(newState.matrix, action.payload.i, action.payload.j);
      break;  
  }
  return newState;
}

// var state = reducer();
// state = reducer(state, changeCell(1,1));
// state = reducer(state, changeCell(1,1));
// state = reducer(state, changeCell(1,1));
// state = reducer(state, changeCell(1,1));
// state = reducer(state, changeCell(1,1));
// state = reducer(state, changeCell(1,1));