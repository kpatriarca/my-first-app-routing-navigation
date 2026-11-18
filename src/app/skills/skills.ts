import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  // Input: the list of skills comes from the parent.
  skills = input.required<string[]>();

  // Output: an event this component sends up to the parent.
  skillSelected = output<string>();

  selectSkill(skill: string) {
  console.log('Selected skill:', skill);
  this.skillSelected.emit(skill);
}
}
