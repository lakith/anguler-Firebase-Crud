import { Employee } from './../shared/employee.model';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { element } from 'protractor';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];

  constructor(private emploeeServise: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    const x = this.emploeeServise.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      // tslint:disable-next-line:no-shadowed-variable
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.employeeList.push(y as Employee);
      });
    });
  }

  onEdit(emp: Employee) {
    this.emploeeServise.selectedEmployee = Object.assign({}, emp);
  }

  onDelete(key: string) {
    if (confirm('Are You sure you wanna delete?') === true ) {
    this.emploeeServise.deleteEmployee(key);
    this.tostr.warning('Employee has been Deleted', 'Employee delete');
    }
  }

}
