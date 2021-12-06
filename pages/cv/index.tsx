import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { MarkdownService, MarkdownFile } from '../../services/markdown'
import { Project } from '../../components/project'
import styles from '../../styles/cv.module.css'

export const getStaticProps: GetStaticProps = async () => {
  const service = new MarkdownService()
  const projects = await service.getMarkdownFiles()

  return {
    props: {
      projects,
    },
  }
}

interface CvPageProps {
  projects: MarkdownFile[]
}

const CvPage: NextPage<CvPageProps> = (props: CvPageProps) => {
  const { projects } = props
  const projectsComponents = projects.map((project: MarkdownFile, index: number) => {
    return <Project key={index} content={project.content} data={project.data} />
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Luis Valdovinos</title>
        <meta name="description" content="Luis Valdovinos personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Luis Valdovinos</h1>
        {projectsComponents}
      </main>
    </div>
  )
}

export default CvPage
