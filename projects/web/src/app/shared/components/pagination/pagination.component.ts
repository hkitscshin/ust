import { Component, Input } from '@angular/core';
import { PaginatorBlockBaseComponent } from '@dminine/ng-lib';

@Component({
  selector: 'ust-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent extends PaginatorBlockBaseComponent {
  @Input()
  get perPage(): number { return this._perPage; }
  set perPage(perPage: number) {
    this._perPage = perPage;
    this.totalPage = Math.ceil(this.totalCount / this.perPage);
  }
  private _perPage: number;

  @Input()
  get perBlock(): number { return this._perBlock; }
  set perBlock(perBlock: number) {
    this._perBlock = perBlock;

    if (this.currentPage > this.totalPage) {
      this.changePage(this.totalPage);
    } else {
      this.makeBlock();
    }
  }
  private _perBlock: number;

  constructor() {
    super();
  }
}
