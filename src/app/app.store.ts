/**
 * Created by alice on 21/04/17.
 */

import { Report } from './reports/report.model'

export interface AppStore {
  reports: Report[];
  selectedReport: Report;
}
