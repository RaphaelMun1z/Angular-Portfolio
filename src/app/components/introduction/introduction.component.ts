import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import {MatButtonModule} from '@angular/material/button';
import {
    MatDialog
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [RippleModule, RouterModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
    readonly dialog = inject(MatDialog);
    
    openDialog(projectName: string, source: string) {
        this.dialog.open(ModalComponent, {
            data: { 
                projectName, source
            }
        });
    }
}
