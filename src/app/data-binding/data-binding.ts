import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  pageTitle = 'Data Binding';

  skills = ['HTML and CSS', 'JavaScript', 'TypeScript', 'Angular'];

  skillName = 'Angular';
  skillLevel = 40;

  increase() {
    this.skillLevel = Math.min(this.skillLevel + 10, 100);
  }

  decrease() {
    this.skillLevel = Math.max(this.skillLevel - 10, 0);
  }

  visitorName = '';
  visitorMessage = '';
}
