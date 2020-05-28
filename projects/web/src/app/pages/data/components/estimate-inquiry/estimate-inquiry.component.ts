import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { take, finalize } from 'rxjs/operators';
import { FunctionsCaller } from '../../../../../../../ust/src/lib/core/services/functions-caller.service';
import { EstimateService } from '../../../../../../../ust/src/lib/entities/estimate/estimate.service';
import { EstimateStatus } from '../../../../../../../ust/src/lib/entities/estimate/types';


@Component({
  selector: 'ust-estimate-inquiry',
  templateUrl: './estimate-inquiry.component.html',
  styleUrls: ['./estimate-inquiry.component.scss']
})
export class EstimateInquiryComponent {
  isLoading = false;

  constructor(
    private estimateService: EstimateService,
    private caller: FunctionsCaller,
    private router: Router
  ) { }

  submit(formValue: any) {
    this.isLoading = true;

    const mailOptions = {
      email: 'sales.us@esgroup.net',
      subject: `[견적문의] ${formValue.title}`,
      text: `성명: ${formValue.name}
이메일: ${formValue.email}
제목: ${formValue.title}
내용
${formValue.content}`,
      attachments: formValue.attachments
    };

    this.isLoading = true;

    forkJoin([
      this.estimateService.add({ ...formValue, status: EstimateStatus.제출 }).pipe(take(1)),
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
