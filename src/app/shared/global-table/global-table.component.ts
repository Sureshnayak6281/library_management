import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { authur_table } from 'src/app/app.constants';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import{authur_table} from '../app.constant';

@Component({
  selector: 'app-global-table',
  templateUrl: './global-table.component.html',
  styleUrls: ['./global-table.component.css'],
  
})
export class GlobalTableComponent {

  @Input() authurdata:any;
  @Input() displayedColumns:any;
  @Input() total:any;
  @Output() pageChanged: EventEmitter<any> = new EventEmitter();
  page:any= 1;


  onPageChanged(event: any) {
    this.pageChanged.emit(event)
  }



}
