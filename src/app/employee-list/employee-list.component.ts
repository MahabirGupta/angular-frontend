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
    this.employees=[
      {
      "id": 1,
      "firstName": "Mahabir",
      "lastName": "Gupta",
      "emailId": "mahabir@gmail.com"
      },
      {
      "id": 2,
      "firstName": "Anish",
      "lastName": "Gupta",
      "emailId": "anish@gmail.com"
      }
      ]
  }

}
