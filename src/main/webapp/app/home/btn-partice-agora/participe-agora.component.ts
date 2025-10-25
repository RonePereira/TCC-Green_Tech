import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
    selector: 'jhi-participe-agora',
    templateUrl: './participe-agora.component.html',
    styleUrls: ['./participe-agora.component.scss'],
    standalone: true,
    imports: [SharedModule, RouterModule],
})
export class ParticipeAgoraComponent { }
