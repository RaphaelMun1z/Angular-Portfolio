import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
} from '@angular/material/dialog';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, SafeUrlPipe ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { source: string; projectName: string }) {}
}
