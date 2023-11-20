import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'
import { MatDialogModule } from '@angular/material/dialog';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomSheetComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModule,
    MatBottomSheetModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
