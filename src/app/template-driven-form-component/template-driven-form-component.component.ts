import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  securityCodeVisible = false;
  toggleSecurityCode() {
    this.securityCodeVisible = !this.securityCodeVisible;
  }

  onSubmit() {
    console.log('!!!!!!Formulaire rempli!!!!');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
