import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ust-certification-auth-dialog',
  templateUrl: './certification-auth-dialog.component.html',
  styleUrls: ['./certification-auth-dialog.component.scss']
})
export class CertificationAuthDialogComponent implements OnInit {
  filePath: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { filePath: string }
  ) {
    this.filePath = this.data.filePath;
  }

  ngOnInit() {
  }

}
