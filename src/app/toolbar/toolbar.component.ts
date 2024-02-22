
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  
  constructor( private dialog: MatDialog) { }
  
  toggleD(){
    this.toggle.emit(null);
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      height: '250px',
      hasBackdrop: true,
      autoFocus: false
    });

  }


}
