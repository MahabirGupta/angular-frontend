// employee-list.module.ts

import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [CommonModule], // Include CommonModule here
  exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
