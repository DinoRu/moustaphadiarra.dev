'use client'
import React from 'react'
import { SiReact } from 'react-icons/si'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from './lib/windowAnimation'
import { FadeContainer, popUp } from './lib/FrameMotionVariants'
import { useTheme } from 'next-themes'

const skills = [
  {
    name: 'React',
    logo: SiReact,
  },
]

export default function Skills() {
  const { theme } = useTheme()

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left // Position x à l'intérieur de l'élément
    const y = e.clientY - rect.top // Position y à l'intérieur de l'élément

    const backgroundColor =
      theme === 'dark'
        ? `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))` // Gris en mode sombre
        : `radial-gradient(circle at ${x}px ${y}px, rgba(128, 0, 255, 0.2), rgba(255, 255, 255, 0))` // Violet en mode clair

    const borderImage =
      theme === 'dark'
        ? `radial-gradient(20% 75% at ${x}px ${y}px, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch` // Bordure gris en mode sombre
        : `radial-gradient(20% 75% at ${x}px ${y}px, rgba(128, 0, 255, 0.7), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch` // Bordure violet en mode clair

    e.currentTarget.style.background = backgroundColor
    e.currentTarget.style.borderImage = borderImage
  }

  return (
    <div>
      <span className="title-font text-3xl font-bold">My Top Skills</span>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            title={skill.name}
            variants={popUp}
            key={skill.name}
            onMouseMove={handleMouseMove}
            onMouseLeave={(e) => removeHoverAnimation(e)}
            className="group flex origin-center transform items-center justify-center gap-4 rounded-sm border
                           border-primary-300 p-4 hover:bg-primary-300 dark:border-neutral-700 sm:justify-start md:origin-top"
          >
            <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <skill.logo className="h-8 w-8" />
            </div>
            <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
