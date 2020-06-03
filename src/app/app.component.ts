import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '@azz/library';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private dialog: MatDialog) {}

    openConfirmDialog() {
        const message = `Are you sure you want to do that?`;

        const dialogData = new ConfirmDialogModel('Confirm Action', message);

        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData,
        });

        dialogRef.afterClosed().subscribe((dialogResult) => {
            if (dialogResult) {
                // this.notificationService.error('Error removing member...');
                console.log('dialogResult YES', dialogResult);
            } else {
                // this.notificationService.error('Error removing member...');
                console.log('dialogResult NO', dialogResult);
            }
        });
    }
}
