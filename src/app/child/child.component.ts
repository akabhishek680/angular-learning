import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  employeeName: string[] = [];
  employeePhoneNumber: string[] = [];
  @Output() employeeCount: EventEmitter<number> = new EventEmitter<number>();

  @Input() set empName(empName: string[]) {
    this.employeeName = empName;
  }

  get empName() {
    return this.employeeName;
  }

  @Input() set empPhoneNumber(empPhoneNumber: string[]) {
    this.employeePhoneNumber = empPhoneNumber;
  }

  get empPhoneNumber() {
    return this.employeePhoneNumber;
  }

  constructor() { }

  ngOnInit(): void {
  }

  sendEmpCount = () => {
    console.log('value sent', this.employeeName.length);
    this.employeeCount.emit(this.employeeName.length);
  }

}
