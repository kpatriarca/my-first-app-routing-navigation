import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile-card/profile-card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  imports: [Header, ProfileCard, Skills, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  proficiencies: Proficiency[] = [
  { tool: 'Visual Studio Code', level: 'Advanced' },
  { tool: 'Git and GitHub', level: 'Intermediate' },
  { tool: 'Node.js and npm', level: 'Intermediate' },
  { tool: 'Angular CLI', level: 'Beginner' }
];

  fullName = ' Patriarca, Kenneth Euan Sean T.';
  location = 'Angeles City, Pampanga';
  email = 'kestptr@gmail.com';
  phone = '09761518104';

  profile = 'I excel at developing concepts into effective web-based solutions that employ innovative technologies. Connect with me as I create pleasant designs that elevate user experiences.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Python',
    'PHP',
    'MySQL',
    'Dart',
    'Flutter',
    'Node.js',
    'MongoDB',
    'TypeScript',
    'Angular'
  ];

  softskills = [
    'Collaboration',
    'Creativity',
    'Communication',
    'Flexibility',
    'Patience',
    'Problem-Solving',
    'Time Management',
    'Work Ethic'
  ];

  dobest = [
    'Build responsive, user-centered interfaces',
    'Translate designs into clean, production-ready UI',
    'Write maintainable front-end code with clear structure',
    'Collaborate effectively and communicate progress clearly',
    'Adapt quickly and work well under pressure',
    'Always focused on clean UI + maintainable code'
  ];

  message = 'Click any skill above to select it.';

  onSkillSelected(skill: string) {
  this.message = `You selected: ${skill}`;
  }
}
