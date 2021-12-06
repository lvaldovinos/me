import { promisify } from 'util'
import matter from 'gray-matter'
import { resolve } from 'path'
import remark from 'remark'
import remarkHtml from 'remark-html'
import fs from 'fs'

const readDir = promisify(fs.readdir)
const readFile = promisify(fs.readFile)

const mdToHtml = remark().use(remarkHtml)

export interface MarkdownMetaData {
  companyName: string
  companyUrl: string
  clientName: string
  clientUrl: string
  startDate: string
  endDate?: string
}

export interface MarkdownFile {
  content: string
  data: MarkdownMetaData
}

export class MarkdownService {
  private markdownPath: string
  constructor() {
    this.markdownPath = resolve('markdown')
  }

  async getMarkdownFiles(): Promise<Array<MarkdownFile>> {
    const filesInDirectory = await readDir(this.markdownPath)

    const filesContent: Array<string> = await Promise.all(
      filesInDirectory.map((file: string) => {
        const filePath = resolve(this.markdownPath, file)
        return readFile(filePath, 'utf8')
      })
    )

    const matterResults = filesContent.map((fileContent: string) => {
      return matter(fileContent) as unknown as MarkdownFile
    })

    const result = await Promise.all(
      matterResults.map(async (matterResult: MarkdownFile) => {
        const htmlContent = await mdToHtml.process(matterResult.content)

        console.log(matterResult.data)
        return {
          content: htmlContent.contents as string,
          data: matterResult.data,
        }
      })
    )

    return result
  }
}
