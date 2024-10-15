import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import {
  FaCommentDots,
  FaUsers,
  FaBrain,
  FaHandshake,
  FaClock,
  FaAdjust,
  FaChalkboardTeacher,
  FaLightbulb,
  FaHeart,
} from 'react-icons/fa'

export const softSkills = [
  { name: 'Communication', icon: FaCommentDots },
  { name: 'Team Collaboration', icon: FaUsers },
  { name: 'Problem-Solving', icon: FaBrain },
  { name: 'Client Relations', icon: FaHandshake },
  { name: 'Time Management', icon: FaClock },
  { name: 'Adaptability', icon: FaAdjust },
  { name: 'Leadership', icon: FaChalkboardTeacher },
  { name: 'Critical Thinking', icon: FaLightbulb },
  { name: 'Empathy', icon: FaHeart },
]

export function SoftSkills({ skill }) {
  const { name, icon: Icon } = skill
  return (
    <div className="flex items-center space-x-4">
      <Icon className="h-6 w-6 text-primary-500" />
      <span className="">{name}</span>
    </div>
  )
}
