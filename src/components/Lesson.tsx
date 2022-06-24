import { isPast, format as formatDate } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'

function lessonFormatLabel(format: string) {
  switch (format) {
    case 'live':
      return 'LIVE'

    case 'class':
      return 'RECORDED'

    default:
      return format.toUpperCase()
  }
}

type Props = {
  slug: string
  title: string
  format: 'live' | 'class'
  availableAt: Date
}

export function Lesson({ title, availableAt, format }: Props) {
  const isAvailable = isPast(availableAt)
  const formattedAvailableAt = formatDate(availableAt, "MMMM d', 'k'h'mm")

  return (
    <a href="#">
      <span className="text-gray-300">{formattedAvailableAt}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Content released
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Coming soon
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {lessonFormatLabel(format)}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  )
}
