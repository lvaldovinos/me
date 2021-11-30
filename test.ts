import { MarkdownService } from './services/markdown'

async function main() {
  const service = new MarkdownService()

  const result = await service.getMarkdownFiles()

  console.log(result)
}

main()
