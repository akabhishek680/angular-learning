import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-project';

  employeeName: string[] = [];
  employeePhoneNumber: string[] = [];
  employeeCount: number = 0;

  AddEmployee = (employeeName: string, employeePhoneNumber: string) => {
    this.employeeName.push(employeeName);
    this.employeePhoneNumber.push(employeePhoneNumber);

    console.log('employee details are:')
    console.log(this.employeeName);
    console.log(this.employeePhoneNumber);
  }

  setEmployeeCount = ($event: any) => {
    console.log('inside set emp count');
    console.log($event);
    this.employeeCount = $event;
  }
}
