import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { layoutComponent } from './Layout/layout.component';
import { TestFieldComponent } from './pages/test-field/test-field.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: layoutComponent },
  { path: 'layout', component: layoutComponent },
  { path: 'testfield', component: TestFieldComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
