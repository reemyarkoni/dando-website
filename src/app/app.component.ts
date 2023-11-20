import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dando-website';
    // constructor(private dialogRef: MatDialog){};

    // openDialog(){
    //     this.dialogRef.open(PopupComponent);
    // }


  constructor(private bottomSheet: MatBottomSheet){}

  openBottomSheet(){
    this.bottomSheet.open(BottomSheetComponent);
  }
}
