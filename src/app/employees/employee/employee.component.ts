import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private emploeeServise: EmployeeService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


    onSubmit(empfrm: NgForm) {
      if (empfrm.value.$key == null) {
      this.emploeeServise.insertEmloyee(empfrm.value);
      } else {
        this.emploeeServise.updateEmployee(empfrm.value);
      }
      this.resetForm(empfrm);
      this.tostr.success('Employee has been submitted successfully', 'Employee register');

    }

    resetForm(empfrm?: NgForm) {
      if (empfrm != null) {
      empfrm.reset();
      }
      this.emploeeServise.selectedEmployee = {

        $key : null,
        name : '',
        position : '',
        office : '',
        salary : 0
      };

    }

}
