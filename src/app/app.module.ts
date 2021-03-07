import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedService } from './_shared/services/shared.service';
import { MasterDataModule } from './master-data/master-data.module';
import { BillingModule } from './billing/billing.module';
import { PricingModule } from './pricing/pricing.module';
import { ServicesModule } from './services/services.module';
import { ItemsModule } from './items/items.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './_shared/services/login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ModalModule.forRoot(),
    LoginModule,
    BillingModule,
    PricingModule,
    ServicesModule,
    ItemsModule,
    MasterDataModule
  ],
  providers: [
    SharedService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
