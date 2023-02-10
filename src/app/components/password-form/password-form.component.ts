import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent {
  @Input() userPassword!: string;
  @Output() checkPasswordEvent = new EventEmitter<string>();
  enteredPassword!: string;

  checkPassword(): void {
    console.log(this.enteredPassword);
    this.checkPasswordEvent.emit(this.enteredPassword); 
   }
}
