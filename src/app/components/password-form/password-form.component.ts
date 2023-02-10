import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  @Input() userPassword!:string; 
  enteredPassword!:string; 
}
