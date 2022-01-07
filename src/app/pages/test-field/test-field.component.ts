import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  templateUrl: './test-field.component.html',
  styleUrls: ['./test-field.component.scss'],
})
export class TestFieldComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  empForm: FormGroup;

  constructor(private observer: BreakpointObserver, private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 2000px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([]),
    });
  }

  addEmployee() {
    console.log('Adding a employee');
    this.employees().push(this.newEmployee());
  }

  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  onSubmit() {
    console.log(this.empForm.value);
  }
}
