import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class Notifier {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  info(message: string, duration = 2000) {
    this.snackBar.open(message, '', { duration, panelClass: 'info' });
  }

  success(message: string, duration = 2000) {
    this.snackBar.open(message, '', { duration, panelClass: 'success' });
  }

  warning(message: string, duration = 2000) {
    this.snackBar.open(message, '', { duration, panelClass: 'warning' });
  }

  error(message: string, err?: Error, duration = 5000) {
    this.snackBar.open(message, '', { duration, panelClass: 'error' });

    if (err) {
      console.error(err);
    }
  }
}
