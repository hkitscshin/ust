import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControlBaseComponent, DnlFireUploader } from '@dminine/ng-lib';

@Component({
  selector: 'ust-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TinymceComponent),
      multi: true
    }
  ]
})
export class TinymceComponent extends FormControlBaseComponent {
  @Input() name: string;

  // tslint:disable:max-line-length
  config = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    images_upload_handler: this.imagesUploadHandler.bind(this),
    height: 600,
    language_url : '/assets/tinymce/langs/ko_KR.js',
    language: 'ko_KR'
  };
  // tslint:enable:max-line-length

  constructor(
    private uploader: DnlFireUploader
  ) {
    super(null);
  }

  imagesUploadHandler(blobInfo, success, failure) {
    const uploadTask = this.uploader.upload(blobInfo.blob(), this.name, blobInfo.filename());

    uploadTask.getDownloadURL().subscribe(success);

    uploadTask.catch(failure);
  }

  protected convertToEmitValue(value: string): string {
    if (value === '<!DOCTYPE html>\n' +
      '<html>\n' +
      '<head>\n' +
      '</head>\n' +
      '<body>\n' +
      '\n' +
      '</body>\n' +
      '</html>') {
      return null;
    }
    return value;
  }
}
