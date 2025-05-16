
import CreateProjectDialog from '@/components/dialogs/create-project-dialog'
import { createProject } from '@/action/project-actions'
import ProjectsList from '@/components/lists/projects-list'
import { getProjects } from '@/db/services/project-service'
import Loading from './loading'
import { Suspense } from 'react'

export default async function Home (): Promise<React.ReactNode> {
  const projects = await getProjects()

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center'>
        <CreateProjectDialog createProject={createProject} />
        <Suspense fallback={<Loading />}>
          <ProjectsList projects={projects} />
        </Suspense>
      </main>
    </div>
  )
}
