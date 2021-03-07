import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterDataComponent } from './master-data/master-data.component';
import { BillingComponent } from './billing/billing.component';
import { ServicesComponent } from './services/services.component';
import { ItemsComponent } from './items/items.component';
import { PricingComponent } from './pricing/pricing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'master-data',
    component: MasterDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
