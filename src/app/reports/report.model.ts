/**
 * Created by alice on 21/04/17.
 */

export interface Report {
  id: string; // type + timestamp
  data: string[]; // JSON? CSV?
  type: string; // Sales report, breakdown, etc.
  timestamp: string; // datetime object?
}
