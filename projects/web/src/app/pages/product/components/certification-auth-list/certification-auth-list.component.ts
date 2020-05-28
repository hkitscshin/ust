import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CertificationAuthDialogComponent } from '../certification-auth-dialog/certification-auth-dialog.component';

@Component({
  selector: 'ust-certification-auth-list',
  templateUrl: './certification-auth-list.component.html',
  styleUrls: ['./certification-auth-list.component.scss']
})
export class CertificationAuthListComponent {
  @Input() tabIndex: number;

  constructor(
    private dialog: MatDialog,
  ) { }

  openCertificationAuth(filePath: string) {
    this.dialog.open(CertificationAuthDialogComponent, {
      width: '800px',
      maxWidth: 'calc(100vw - 24px)',
      data: { filePath }
    });
  }
}
