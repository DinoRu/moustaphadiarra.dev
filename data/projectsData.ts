import type { Project } from 'types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Счет-учет',
    description: `Счет-учет is a mobile app developed for 
        Dagenergi SARL to automate electricity consumption tracking. 
        It allows controllers to record and sync meter readings, 
        improving accuracy and efficiency. The app, built with Flutter, 
        supports both Android and iOS platforms.`,
    imgSrc: '/static/images/projects/dagx_project.png',
    tools: ['Flutter', 'Android', 'VSCode', 'Android Studio'],
    href: 'https://www.github.com/dinoru/dagx',
  },
  {
    type: 'work',
    title: 'ChapMoney',
    description: `
        ChapMoney is a money transfer app designed to facilitate 
        fast and secure international transactions. Developed using Flutter, 
        it ensures a seamless user experience on both Android and iOS platforms, 
        offering features like real-time tracking and low transfer fees.`,
    imgSrc: '/static/images/experiences/logo-img.png',
    tools: ['Flutter', 'Android', 'VSCode', 'Android Studio'],
    href: '',
  },
]
