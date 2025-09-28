import type { StudentListProps } from './types'
import StudentCard from './StudentCard'

const StudentList = ({ students, loading, onEdit, onDelete }: StudentListProps) => (
  <section className="student-manager__list">
    {!loading && students.length === 0 ? (
      <div className="student-manager__empty">No books found</div>
    ) : (
      students.map((student) => (
        <StudentCard key={student.id} student={student} onEdit={onEdit} onDelete={onDelete} />
      ))
    )}
  </section>
)

export default StudentList
