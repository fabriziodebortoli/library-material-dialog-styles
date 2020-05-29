import { NgModule } from '@angular/core';

import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [ConfirmDialogComponent],
    imports: [MatButtonModule],
    exports: [ConfirmDialogComponent, MatButtonModule],
})
export class LibraryModule {}
