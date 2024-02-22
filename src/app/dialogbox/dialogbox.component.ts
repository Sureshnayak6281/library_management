import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {

constructor(private router:Router, private dialogRef: MatDialogRef<DialogboxComponent>){
    
  }

  logout(){
    this.router.navigate(['/login']);
    this.dialogRef.close();
  }

}
