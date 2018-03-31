
// tslint:disable-next-line:import-spacing
import{ EmployeeService } from './shared/employee.service';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  constructor( private emploeeServise: EmployeeService) { }

  ngOnInit() {
  }

}
