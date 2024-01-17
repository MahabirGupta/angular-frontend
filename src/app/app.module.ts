import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component'; // Import EmployeeListComponent
import { EmployeeListModule } from './employee-list/employee-list.module'; // Import EmployeeListModule
// import {AppRoutingModule} from './app-routing.module'

@NgModule({
  declarations: [
    
    AppComponent,
    // EmployeeListComponent,
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    // EmployeeModule, // Import the EmployeeModule
    // Add other modules if any
    EmployeeListModule,
  ],
  providers:[],
  bootstrap: [AppComponent], // Define the root component for bootstrapping
  // exports: [EmployeeListComponent], 

})
export class AppModule { }

