import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import seminars from '../../assets/seminars.json';

// type seminar = {
//     name: string;
//     description: string;
// }

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
    seminar: {name: string, description: string};
    public seminarsData = seminars;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: number){
        // this.name = seminarData[this.data].name;
        // this.description = seminarData[this.data].descprition;
    };

    ngOnInit(){};
    // currentSeminar!: seminar;
    // this.currentSeminar.name = seminarData[this.data].seminarType
    // description: string = seminarData[this.data].descprition;
}
