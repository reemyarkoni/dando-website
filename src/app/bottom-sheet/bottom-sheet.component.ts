import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import seminarsData from '../../assets/seminars.json';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css'
})
export class BottomSheetComponent {

    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: number){}
    
    description: string = seminarsData[this.data].description;


}