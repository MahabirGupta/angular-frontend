import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Import EmployeeListComponent


@NgModule({
  declarations: [
    
    AppComponent,
    EmployeeListComponent,
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    // EmployeeModule, // Import the EmployeeModule
    // Add other modules if any
    // EmployeeListComponent,
  ],
  bootstrap: [AppComponent], // Define the root component for bootstrapping

})
export class AppModule { }

