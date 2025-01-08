import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import {MatButtonModule} from '@angular/material/button';
import {
    MatDialog
} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ButtonComponent } from "../button/button.component";
import { SectionTitleComponent } from "../section-title/section-title.component";
import { BaseContainerComponent } from "../base-container/base-container.component";

@Component({
    selector: 'app-section-introduction',
    standalone: true,
    imports: [RippleModule, RouterModule, MatButtonModule, ButtonComponent, SectionTitleComponent, BaseContainerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './section-introduction.component.html',
    styleUrl: './section-introduction.component.scss'
})
export class SectionIntroductionComponent {
    readonly dialog = inject(MatDialog);
    
    openDialog(projectName: string, source: string) {
        this.dialog.open(ModalComponent, {
            data: { 
                projectName, source
            }
        });
    }
}
