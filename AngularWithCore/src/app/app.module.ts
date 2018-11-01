import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyTableComponent } from './my-table/my-table.component';
import { RouterModule, Routes } from '@angular/router';
//import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'my-dashboard', component: MyDashboardComponent },
  { path: 'second-page', component: MyTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule 
    , RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



