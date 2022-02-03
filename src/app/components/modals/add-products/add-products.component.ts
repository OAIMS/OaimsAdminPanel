import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  testTypes: string[] = ["Cotton", "Mvs", "Pvt", "WashnWear", "Boski"];

  testNames: any = {
    Cotton: ["96-88", "sotton"],
    Mvs: ["26-18", "pvt"],
    Pvt: ["18-18"],
    WashnWear: ["100-80", "64-64", "58-58"],
    Boski: ["chinaBoski"]
  };


  currentTestType = this.testTypes[0];
  currentTestNames = this.testNames[this.currentTestType];

  testForm: any = this.fb.group({
    testType: this.currentTestType,
    testName: this.currentTestNames[0]
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }

  changeTestType() {
    let newTestType = this.testForm.get("testType").value;
    if (newTestType != this.currentTestType) {
      this.currentTestType = newTestType;
      this.currentTestNames = this.testNames[this.currentTestType];

      // Set test name to be the first thing in the testNames array for this test type.
      this.testForm.patchValue({
        testName: this.currentTestNames[0]
      });
    }
  }
}
