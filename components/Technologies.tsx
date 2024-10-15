'use client'

import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

import {
  TouchProvider,
  HybridTooltip,
  HybridTooltipTrigger,
  HybridTooltipContent,
} from './ui/hibrid-tooltips'

import { LuChevronLeft as ChevronLeft } from 'react-icons/lu'
import { LuChevronRight as ChevronRight } from 'react-icons/lu'

import { Pagination, PaginationContent, PaginationItem } from './ui/pagination'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { skillsData } from '@/data/mainData'
import { type Skill } from '@/data/mainData'
import IconsBundle from './lib/social-icons'
import { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

// Fonction pour filtrer les données des compétences
function filterSkillsData(skillsData: Skill[]) {
  const acc: Record<string, Skill[]> = { 'Most Used': [] }

  skillsData.forEach((skill) => {
    if (!skill.hidden) {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)

      if (skill.mostUsed) {
        acc['Most Used'].push(skill)
      }
    }
  })

  return acc
}

export function Technologies() {
  const filteredSkillsData = filterSkillsData(skillsData)
  const categories = Object.keys(filteredSkillsData)
  const [tabIndex, setTabIndex] = useState(0)

  const onTabChange = (value: string) => {
    const index = categories.indexOf(value)
    setTabIndex(index)
  }

  const onNextTab = () => {
    const nextIndex = (tabIndex + 1) % categories.length
    setTabIndex(nextIndex)
  }

  const onPrevTab = () => {
    const prevIndex = (tabIndex - 1 + categories.length) % categories.length
    setTabIndex(prevIndex)
  }

  return (
    <TouchProvider>
      <div className="my-10 w-full">
        <h3
          className="text-2xl 
        font-extrabold leading-9 tracking-tight sm:text-3xl 
        sm:leading-10 md:text-4xl md:leading-14"
        >
          My Top Skills
        </h3>
        <div className="mt-5">
          <Tabs
            value={categories[tabIndex]}
            onValueChange={onTabChange}
            defaultValue={categories[0]}
            className=""
          >
            <TabsList
              className={`h-27 grid w-full grid-cols-2 gap-2 md:h-9 md:grid-cols-5 md:gap-1 lg:grid-cols-5 xl:gap-2`}
            >
              {categories.map((category) => (
                <TabsTrigger
                  key={`trigger-${category}`}
                  value={category}
                  className={
                    category === 'Most Used'
                      ? 'col-span-2 from-blue-300 via-sky-300 to-cyan-300 data-[state=active]:bg-gradient-to-tr data-[state=active]:text-slate-900 md:col-span-1'
                      : ''
                  }
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{category}</CardTitle>
                    {category === 'Most Used' && (
                      <CardDescription>These are my most used technologies.</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-5 gap-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                      {filteredSkillsData[category].map((skill) => (
                        <Tooltip.Provider key={skill.id}>
                          <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                              <Button
                                className={`h-14 p-2 sm:p-2 ${skill.level === 'learning' ? 'border border-green-300' : ''}`}
                                variant="outline"
                              >
                                <IconsBundle kind={skill.id} size={10} iconType="icon" />
                              </Button>
                            </Tooltip.Trigger>
                            <Tooltip.Content>{skill.name}</Tooltip.Content>
                          </Tooltip.Root>
                        </Tooltip.Provider>
                      ))}
                    </div>
                  </CardContent>
                  {category !== 'Most Used' && (
                    <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span className="mx-1 inline-block h-3 w-3 rounded-full bg-green-300"></span>
                        <span>Currently Learning</span>
                      </div>
                      <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                              onClick={onPrevTab}
                            >
                              <ChevronLeft className="h-3.5 w-3.5" />
                              <span className="sr-only">Previous Page</span>
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                              onClick={onNextTab}
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                              <span className="sr-only">Next Page</span>
                            </Button>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </CardFooter>
                  )}
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </TouchProvider>
  )
}
