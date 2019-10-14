import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: "arms",
        loadChildren: "../arms/arms.module#ArmsModule"
    },
    {
        path: "forehead",
        loadChildren: "../forehead/forehead.module#ForeheadModule"
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule { }