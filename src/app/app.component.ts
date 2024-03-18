import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { PopupComponent } from './popup/popup.component';
import seminars from '../assets/seminars.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'dando-website';
    seminars = seminars;
    svgs:SafeHtml[] = [];
    constructor(
        private dialogRef: MatDialog,
        private sanitizer: DomSanitizer) { };

    openDialog(seminarNum: number) {
        this.dialogRef.open(PopupComponent, {
            data: seminarNum
        });
    }

    ngOnInit(): void {
        for(let i = 0; i < seminars.length; i++){
            this.svgs.push(this.sanitizer.bypassSecurityTrustHtml(seminars[i].svg));
        }

        // this.seminars.forEach(seminar => {
        //     this.svgs.push(this.sanitizer.bypassSecurityTrustHtml(seminar.svg));
        // })
    }
    //   constructor(private bottomSheet: MatBottomSheet){}

    //   openBottomSheet(seminarNum: number){
    //     this.bottomSheet.open(BottomSheetComponent, {
    //         data: seminarNum
    //     });
    //   }
}
