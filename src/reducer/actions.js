export function changeCell(i, j) {
  return {
    type: 'CHANGE_CELL',
    payload: {
      i, j
    }
  }
}