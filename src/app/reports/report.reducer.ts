/**
 * Created by alice on 21/04/17.
 */

export const ReportReducer = (state: any = [], {type, payload}) => {
  console.log(type);
  switch(type) {
    case 'INIT_REPORTS':
      return payload;
    case 'CREATE_REPORT':
      return [...state, payload];
    case 'UPDATE_REPORT':
      return state.map(report => {
        return report.type === payload.type ? Object.assign({}, report, payload) : report;
      });
    case 'DELETE_REPORT':
      return state.filter(report => {
        return report.type !== payload.type;
      });
    default:
      return state;
  }
};

export const SelectedReportReducer = (state: any = null, {type, payload}) => {
  switch(type) {
    case 'SELECT_REPORT':
      return payload;
    case 'DESELECT':
      return null;
    default:
      return state;
  }
}
