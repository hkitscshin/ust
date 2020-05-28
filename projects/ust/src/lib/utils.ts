import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { firestore } from 'firebase/app';


export function getParamsId(route: ActivatedRoute): Observable<string> {
  return route.params.pipe(
    map(params => params.id),
    filter<string>(Boolean)
  );
}

export function firestoreTimestampNow(): firestore.Timestamp {
  return firestore.Timestamp.now();
}

export function firestoreTimestampFromDate(date: Date): firestore.Timestamp {
  return firestore.Timestamp.fromDate(date);
}

export function firestoreTimestampToDate(date: firestore.Timestamp): Date {
  return date.toDate();
}

export function getTodayNumber(): [number, number, number] {
  const today = new Date();
  return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
}

export function getTodayString(): [string, string, string] {
  const today = new Date();
  return [today.getFullYear().toString(), (today.getMonth() + 1).toString(), today.getDate().toString()];
}

export function getDateString(date: Date): [string, string, string] {
  return [date.getFullYear().toString(), (date.getMonth() + 1).toString(), date.getDate().toString()];
}

export function stripTag(html: string): string {
  if (!html || typeof html !== 'string') {
    return html;
  }

  return html.replace(/(<(.|\n)*?>)|(&[#a-z0-9]+;)|(\n)/g, '');
}
