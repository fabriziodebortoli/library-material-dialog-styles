import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { LibraryModule } from '@azz/library'; // BROKEN
// import { LibraryModule } from 'projects/azz/library/src/public-api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule, LibraryModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
