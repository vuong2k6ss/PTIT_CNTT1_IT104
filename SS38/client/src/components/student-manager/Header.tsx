type HeaderProps = {
  onAddBook: () => void
}

const StudentManagerHeader = ({ onAddBook }: HeaderProps) => (
  <header className="student-manager__header">
    <div className="student-manager__heading">
      <span className="student-manager__icon" aria-hidden="true">
        📚
      </span>
      <h1>BOOK LIBRARY MANAGER</h1>
    </div>
    <button className="student-manager__add-button" type="button" onClick={onAddBook}>
      ADD BOOK
    </button>
  </header>
)

export default StudentManagerHeader
