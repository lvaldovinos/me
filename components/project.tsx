import React from 'react'
import { MarkdownMetaData } from '../services/markdown'
import dayjs from 'dayjs'

interface ProjectProps {
  content: string
  data: MarkdownMetaData
}

export function Project(props: ProjectProps) {
  const { content, data } = props
  const startDateFormat = dayjs(data.startDate).format('MM-DD-YYYY')
  let endDateFormat = 'current'

  if (data.endDate) {
    endDateFormat = dayjs(data.endDate).format('MM-DD-YYYY')
  }
  return (
    <div>
      <h3>
        <a href={data.companyUrl}>{data.companyName}</a>
      </h3>
      <span>
        {startDateFormat} - {endDateFormat}
      </span>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}
