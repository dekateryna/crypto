import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { TroublePageComponent } from './pages/trouble-page/trouble-page.component';
import { HeaderDashboardComponent } from './components/general/header-dashboard/header-dashboard.component';
import { SideMenuComponent } from './components/general/side-menu/side-menu.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { BalanceCardComponent } from './components/dashboard/balance-card/balance-card.component';
import { GrafCardComponent } from './components/dashboard/graf-card/graf-card.component';
import { TransactionCardComponent } from './components/dashboard/transaction-card/transaction-card.component';
import { TableCardComponent } from './components/dashboard/transaction-card/table-card/table-card.component';
import { StatisticCardComponent } from './components/dashboard/statistic-card/statistic-card.component';
import { NewsCardComponent } from './components/dashboard/news-card/news-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    TroublePageComponent,
    HeaderDashboardComponent,
    SideMenuComponent,
    DashboardPageComponent,
    OverviewComponent,
    BalanceCardComponent,
    GrafCardComponent,
    TransactionCardComponent,
    TableCardComponent,
    StatisticCardComponent,
    NewsCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
