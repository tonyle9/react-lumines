import { FINISH } from './actions';

export const gameRecoder = store => next => {
  const actions = [];
  return action => {
    if (action.type.startsWith('GAME.') || action.type.startsWith('MOVE.')) {
      actions.push(action);
    }
    if (action.type === FINISH) {
      console.log(actions);
    }
    next(action);
  };
};