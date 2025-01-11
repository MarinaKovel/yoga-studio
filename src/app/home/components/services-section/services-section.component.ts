import { Component } from '@angular/core';

const CARDS_DATA = [
  { icon: '../../../../assets/spa.svg', title: 'Spa area', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
  { icon: '../../../../assets/changing-room.svg', title: 'Changing Room', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
  { icon: '../../../../assets/free-lesson.svg', title: 'Free Lessons', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
  { icon: '../../../../assets/rug.svg', title: 'Free Rug', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
]

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {

}
