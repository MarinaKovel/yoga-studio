import { YogaClasses } from "../interfaces/yoga-classes.interface"

export const CLASSES_DATA: YogaClasses[] = [
    {
      name: 'Beginners Yoga',
      image: '../../../../assets/class-beginners.png',
      description: 'Perfect for newcomers, our beginners yoga classes focus on foundational poses and techniques to build strength, flexibility, and confidence. Start your yoga journey with us in a supportive and friendly environment.',
      level: 1,
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
      level: 2,
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
      level: 3,
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
      level: 3,
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
      level: 1,
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

  const mockAPI = [
    {
      "createdAt": "2025-01-16T17:52:25.472Z",
      "name": "Dr. Shawn Hansen",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer1.png",
      "id": "1",
      "class": "Beginners Yoga",
      "level": 1,
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "0"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "3"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "9"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "3"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "0"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "4"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "1"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "7"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T05:07:44.725Z",
      "name": "Elena Carter",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer2.png",
      "id": "2",
      "class": "Stretching",
      "level": 2,
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "0"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T18:26:51.015Z",
      "name": "Lucy Wuckert",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer3.png",
      "id": "3",
      "class": "Stretching",
      "level": 1,
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "3"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "4"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T06:46:52.195Z",
      "name": "Marlene Maggio",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer4.png",
      "id": "4",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T11:08:22.722Z",
      "name": "Pearl O'Hara",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer5.png",
      "id": "5",
      "class": "Fly-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T10:03:27.652Z",
      "name": "Bessie Weimann",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer6.png",
      "id": "6",
      "class": "Fly-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T13:07:55.724Z",
      "name": "Agnes Harvey",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer7.png",
      "id": "7",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T10:59:47.579Z",
      "name": "Caroline Denesik",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer8.png",
      "id": "8",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T20:11:10.378Z",
      "name": "Christopher Blick",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer9.png",
      "id": "9",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T15:16:46.909Z",
      "name": "Ella Kozey",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer10.png",
      "id": "10",
      "class": "Zoomba",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T01:22:39.960Z",
      "name": "Ginger Wunsch",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer11.png",
      "id": "11",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T00:06:42.306Z",
      "name": "Marion West",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer12.png",
      "id": "12",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T05:37:23.184Z",
      "name": "Joe Murazik",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer13.png",
      "id": "13",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T09:00:42.054Z",
      "name": "Jeanette Sanford",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer14.png",
      "id": "14",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T09:26:41.956Z",
      "name": "Marco Boyle",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer15.png",
      "id": "15",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T21:18:18.691Z",
      "name": "Ms. Darla Grady",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer16.png",
      "id": "16",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T23:28:59.952Z",
      "name": "Myrtle Doyle",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer17.png",
      "id": "17",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T22:05:20.800Z",
      "name": "Jennie Gleason",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer18.png",
      "id": "18",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T18:28:46.216Z",
      "name": "Miriam Raynor",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer19.png",
      "id": "19",
      "class": "Beginners Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T21:53:12.145Z",
      "name": "Anna Tremblay",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer20.png",
      "id": "20",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T03:34:29.644Z",
      "name": "Irma Wolf",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer21.png",
      "id": "21",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T07:05:11.531Z",
      "name": "Armando Abshire III",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer22.png",
      "id": "22",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T09:27:55.949Z",
      "name": "Virginia Fay",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer23.png",
      "id": "23",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T11:14:52.322Z",
      "name": "Ramon Altenwerth",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer24.png",
      "id": "24",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T15:11:36.913Z",
      "name": "Owen Gibson DDS",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer25.png",
      "id": "25",
      "class": "Stretching",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T21:15:37.446Z",
      "name": "Keith Wolff",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer26.png",
      "id": "26",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T23:52:01.416Z",
      "name": "Cornelius Kilback DDS",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer27.png",
      "id": "27",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T19:57:50.930Z",
      "name": "Isabel Murazik",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer28.png",
      "id": "28",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T05:39:52.005Z",
      "name": "Van Herzog",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer29.png",
      "id": "29",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-16T11:35:15.152Z",
      "name": "Sharon Brown IV",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer30.png",
      "id": "30",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    },
    {
      "createdAt": "2025-01-17T00:44:09.109Z",
      "name": "Elvira Hilll",
      "avatar": "https://raw.githubusercontent.com/MarinaKovel/onlinestoredata/refs/heads/main/yoga-team/trainer31.png",
      "id": "31",
      "class": "Yin-Yoga",
      "personality": [
        {
          "start": "Introvert",
          "end": "Extravert",
          "value": 60
        },
        {
          "start": "Analytical",
          "end": "Creative",
          "value": 70
        },
        {
          "start": "Busy",
          "end": "Time rich",
          "value": 30
        },
        {
          "start": "Messy",
          "end": "Organized",
          "value": 80
        },
        {
          "start": "Independant",
          "end": "Team player",
          "value": 40
        }
      ],
      "sessions": [
        [
          {
            "time": "10:00 AM",
            "freeSlots": "4"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "9"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ],
        [
          {
            "time": "10:00 AM",
            "freeSlots": "5"
          },
          {
            "time": "12:00 PM",
            "freeSlots": "5"
          },
          {
            "time": "16:00 PM",
            "freeSlots": "10"
          }
        ]
      ]
    }
  ]

 