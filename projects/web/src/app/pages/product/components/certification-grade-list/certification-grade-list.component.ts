import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CertificationAuthDialogComponent } from '../certification-auth-dialog/certification-auth-dialog.component';

@Component({
  selector: 'ust-certification-grade-list',
  templateUrl: './certification-grade-list.component.html',
  styleUrls: ['./certification-grade-list.component.scss']
})
export class CertificationGradeListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openCertificationAuth(filePath: string) {
    this.dialog.open(CertificationAuthDialogComponent, {
      width: '800px',
      maxWidth: 'calc(100vw - 24px)',
      data: { filePath }
    });
  }

}
