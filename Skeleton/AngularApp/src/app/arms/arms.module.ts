import { NgModule } from '@angular/core';
import { ArmsComponent } from './component/arms.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ArmsComponent
    }
]

@NgModule({
    declarations: [ArmsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class ArmsModule { }