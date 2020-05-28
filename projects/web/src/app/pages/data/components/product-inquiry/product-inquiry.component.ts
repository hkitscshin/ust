import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { FunctionsCaller } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { InquiryService } from '../../../../../../../ust/src/lib/entities/inquiry/inquiry.service';
import { InquiryStatus } from '../../../../../../../ust/src/lib/entities/inquiry/types';


@Component({
  selector: 'ust-product-inquiry',
  templateUrl: './product-inquiry.component.html',
  styleUrls: ['./product-inquiry.component.scss']
})
export class ProductInquiryComponent {
  isLoading = false;

  constructor(
    private inquiryService: InquiryService,
    private caller: FunctionsCaller,
    private router: Router
  ) { }

  submit(formValue: any) {
    this.isLoading = true;

    const mailOptions = {
      email: 'sales.us@esgroup.net',
      subject: `[제품문의] ${formValue.title}`,
      text: `성명: ${formValue.name}
이메일: ${formValue.email}
제목: ${formValue.title}
내용
${formValue.content}`,
      attachments: formValue.attachments
    };

    this.isLoading = true;

    forkJoin([
      this.inquiryService.add({ ...formValue, status: InquiryStatus.제출 }).pipe(take(1)),
      this.caller.sendMail(mailOptions)
    ]).pipe(
      finalize(() => this.isLoading = false)
    ).subscribe(() => {
      alert('제출하였습니다');
      this.router.navigate(['/']);
    }, err => {
      console.error(err);
      alert(`오류가 발생하였습니다\nError: ${err.message}`);
    });
  }

}
