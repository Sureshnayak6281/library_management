import { Component } from '@angular/core';
import { AuthurService } from '../authur.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateupdateauthurComponent } from './createupdateauthur/createupdateauthur.component';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
;

@Component({
  selector: 'app-authur',
  templateUrl: './authur.component.html',
  styleUrls: ['./authur.component.css'],
})
export class AuthurComponent {
  data: any = [];
  displayedColumns: string[] = [
    'position',
    'author_name',
    'user_name',
    'email',
    'action',
    'status',
  ];
  total: any = 21;
  searchRequestCtrl= new FormControl({ value: '', disabled: false });

  


  constructor(private authur: AuthurService, private dialog: MatDialog) {

    this.searchRequestCtrl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe(() => {
        this.get_authurs();
      });

  }

  ngOnInit() {
    this.get_authurs();
  }
  filterUsers(searchValue:any){
    console.log(searchValue)

  }

  creatauthur(){
      const dialogRef = this.dialog.open(CreateupdateauthurComponent, {
        maxWidth: '100%',
        width: '750px',
      });
      dialogRef.afterClosed().subscribe((res: string) => {
        if (res === 'ok') {
          
        }
      });
    }

  
  onPageChanged(event: any) {
    const page: any = event.pageIndex;
    console.log(page);
    const payload = {
      page: page,
    };
    this.authur.on_change_page(payload.page).subscribe(
      (response: any) => {
        this.data = response.data;
      },

      (error: any) => {
        console.error(error);
      }
    );
  }

  get_authurs() {
    const author_name: any = this.searchRequestCtrl.value;
    const payload = {    
      authur_names: author_name,
    };
  
    this.authur.get_authurs(payload.authur_names).subscribe(
      (response: any) => {
        this.data = response.data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  
}
