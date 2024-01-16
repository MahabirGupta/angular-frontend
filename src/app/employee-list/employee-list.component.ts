import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  // standalone: true,
  // imports: [],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // Employee[] is an array
  employees:Employee[] | undefined 

  constructor(){}

  ngOnInit(): void {
    
  }

}
