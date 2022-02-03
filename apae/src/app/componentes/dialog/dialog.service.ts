import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef: any

  constructor(
    public dialog: MatDialog,
  ) { }

  public open(data: any, after: any = () => { }) {

    let config: any = 
      {
        data: {
          data,
        },
        autoFocus: false,
      }


    config['width'] = (window.innerWidth - 0.1 * window.innerWidth) + 'px'

    this.dialogRef = this.dialog.open(
      DialogComponent,
      config
    );
    this.dialogRef.afterClosed().subscribe(after);
  }

  public close() {
    this.dialogRef.close()
  }

}
