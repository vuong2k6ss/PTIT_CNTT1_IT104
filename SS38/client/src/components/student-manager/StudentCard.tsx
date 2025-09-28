import type { StudentCardProps } from './types'

const StudentCard = ({ student, onEdit, onDelete }: StudentCardProps) => (
  <article className="student-card">
    <div className="student-card__details">
      <h2>{student.title}</h2>
      <p>
        {student.author} <span>•</span> {student.year}
        {student.category ? (
          <>
            {' '}
            <span>•</span> {student.category}
          </>
        ) : null}
      </p>
    </div>
    <div className="student-card__actions">
      <button type="button" aria-label={`Edit ${student.title}`} onClick={() => onEdit(student)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm14.71-8.04a1.003 1.003 0 0 0 0-1.42l-2.5-2.5a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.99-1.66z" />
        </svg>
      </button>
      <button type="button" aria-label={`Delete ${student.title}`} onClick={() => onDelete(student)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12zm12-14h-3.5l-1-1h-3l-1 1H6v2h12V5z" />
        </svg>
      </button>
    </div>
  </article>
)

export default StudentCard
