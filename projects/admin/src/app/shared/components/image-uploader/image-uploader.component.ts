import { Component, ViewChild, ElementRef, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  DnlFireUploader,
  FormControlBaseComponent
} from '@dminine/ng-lib';

@Component({
  selector: 'ust-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImageUploaderComponent),
      multi: true
    }
  ]
})
export class ImageUploaderComponent extends FormControlBaseComponent {
  @Input() width = 100;
  @Input() height = 100;

  @ViewChild('fileInputRef', { static: true }) fileInputRef: ElementRef;

  constructor(
    private uploader: DnlFireUploader,
  ) {
    super();
  }

  onButtonClick() {
    this.fileInputRef.nativeElement.click();
  }

  uploadFile(file: File) {
    if (file) {
      const uploadTask = this.uploader.upload(file, 'board-image');
      uploadTask.getDownloadURL().subscribe(url => {
        this.formCtrl.setValue(url);
        this.fileInputRef.nativeElement.value = '';
      });
    }
  }
}
