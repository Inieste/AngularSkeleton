import { NgModule } from '@angular/core';
import { ForeheadComponent } from './component/forehead.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ForeheadComponent
    }
]

@NgModule({
    declarations: [ForeheadComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ForeheadModule { }