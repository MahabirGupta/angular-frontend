// employee-list.module.ts

import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  declarations: [EmployeeListComponent],
  exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
