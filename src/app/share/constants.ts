import { DialogData } from "../interfaces/dialog-data.interface"
import { Trainer } from "../interfaces/trainer.interface"
import { YogaClasses } from "../interfaces/yoga-classes.interface"

export const CLASSES_DATA: YogaClasses[] = [
    {
      name: 'Beginners Yoga',
      image: '../../../../assets/class-beginners.png',
      description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility, and confidence. Start your yoga journey with us in a supportive and friendly environment.',
      pros: [
        { id: 1,name: 'Free Rugs', description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility' },
        { id: 2,name: 'Changing Room', description: 'Changing Room with lockers and showers is available' },
        { id: 3,name: 'Free Towel', description: 'Free towel in shower is available' },
        { id: 4,name: 'Free Lesson', description: 'You can try your first lesson for free' },
      ]
    },
    {
      name: 'Stretching',
      image: '../../../../assets/stretching.jpg',
      description: 'New stretching classes for flexibility, mobility and health are released WEEKLY. Appropriate for absolute beginners, beginners, and intermediate/advanced.',
      pros: [
        { id: 1, name: 'Free Lesson', description: 'You can try your first lesson for free' },
        { id: 2, name: 'Free Rugs', description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility' },
        { id: 3, name: 'Changing Room', description: 'Changing Room with lockers and showers is available' },
        { id: 4, name: 'Free Towel', description: 'Free towel in shower is available' }
      ]
    },
    {
      name: 'Fly-Yoga',
      image: '../../../../assets/fly-yoga.jpg',
      description: 'Aerial yoga allows you to do challenging poses without putting pressure on your shoulders, spine, or head like mat yoga may.',
      pros: [
        { id: 1, name: 'Free Rugs', description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility' },
        { id: 2, name: 'Changing Room', description: 'Changing Room with lockers and showers is available' },
        { id: 3, name: 'Free Towel', description: 'Free towel in shower is available' }
      ]
    },
    {
      name: 'Yin-Yoga',
      image: '../../../../assets/yin-yoga.jpg',
      description: 'These Yin Yoga sequences are designed to help you sit longer and more comfortably in meditation by stretching connective tissue around your joints.',
      pros: [
        { id: 1, name: 'Free Rugs', description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility' },
        { id: 2, name: 'Changing Room', description: 'Changing Room with lockers and showers is available' },
        { id: 3, name: 'Free Towel', description: 'Free towel in shower is available' },
        { id: 4, name: 'Free Lesson', description: 'You can try your first lesson for free' },
      ]
    },
    {
      name: 'Zoomba',
      image: '../../../../assets/zoomba.jpg',
      description: 'Get fit, stay fit. Burn calories while having fun at the best exercise class ever.',
      pros: [
        { id: 1, name: 'Free Rugs', description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility' },
        { id: 2, name: 'Free Lesson', description: 'You can try your first lesson for free' },
        { id: 3, name: 'Changing Room', description: 'Changing Room with lockers and showers is available' },
        { id: 4, name: 'Free Towel', description: 'Free towel in shower is available' }
      ]
    }
  ]

  export const CARDS_DATA = [
    { icon: '../../../../assets/spa.svg', title: 'Spa area', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
    { icon: '../../../../assets/changing-room.svg', title: 'Changing Room', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
    { icon: '../../../../assets/free-lesson.svg', title: 'Free Lessons', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
    { icon: '../../../../assets/rug.svg', title: 'Free Rug', text: 'Indulge in a world of relaxation and rejuvenation with our exceptional spa services. At our LA center'},
  ]

  export const dialogContent = {
    bookSesson: {
      title: 'Free 30 Day MemberShip',
      content: `<p>Enjoy a complimentary 30-day free trial of our yoga and fitness classes. Experience our serene studio, expert trainers, and diverse class offerings without any commitment. Discover the benefits of yoga and transform your well-being with us.</p>`,
      buttonLabel: 'Book A Session',
      buttonFunction: () => {}
    },
  }