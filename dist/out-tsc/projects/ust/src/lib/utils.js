import { map, filter } from 'rxjs/operators';
import { firestore } from 'firebase/app';
export function getParamsId(route) {
    return route.params.pipe(map(params => params.id), filter(Boolean));
}
export function firestoreTimestampNow() {
    return firestore.Timestamp.now();
}
export function firestoreTimestampFromDate(date) {
    return firestore.Timestamp.fromDate(date);
}
export function firestoreTimestampToDate(date) {
    return date.toDate();
}
export function getTodayNumber() {
    const today = new Date();
    return [today.getFullYear(), today.getMonth() + 1, today.getDate()];
}
export function getTodayString() {
    const today = new Date();
    return [today.getFullYear().toString(), (today.getMonth() + 1).toString(), today.getDate().toString()];
}
export function getDateString(date) {
    return [date.getFullYear().toString(), (date.getMonth() + 1).toString(), date.getDate().toString()];
}
export function stripTag(html) {
    if (!html || typeof html !== 'string') {
        return html;
    }
    return html.replace(/(<(.|\n)*?>)|(&[#a-z0-9]+;)|(\n)/g, '');
}
//# sourceMappingURL=utils.js.map