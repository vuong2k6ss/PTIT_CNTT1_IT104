import type { StudentModalProps } from './types'

const StudentModal = ({
  open,
  mode,
  formState,
  formErrors,
  onClose,
  onSubmit,
  onFieldChange,
  titleInputRef,
}: StudentModalProps) => {
  if (!open) {
    return null
  }

  return (
    <div className="student-modal" role="dialog" aria-modal="true">
      <form className="student-modal__content" onSubmit={onSubmit}>
        <header className="student-modal__header">
          <h2>{mode === 'add' ? 'Add Book' : 'Edit Book'}</h2>
        </header>

        <div className={`student-modal__field ${formErrors.title ? 'has-error' : ''}`}>
          <label htmlFor="book-title">Title *</label>
          <input
            id="book-title"
            ref={titleInputRef}
            type="text"
            value={formState.title}
            onChange={(event) => onFieldChange('title', event.target.value)}
            required
          />
          {formErrors.title && <span className="student-modal__error">{formErrors.title}</span>}
        </div>

        <div className={`student-modal__field ${formErrors.author ? 'has-error' : ''}`}>
          <label htmlFor="book-author">Author *</label>
          <input
            id="book-author"
            type="text"
            value={formState.author}
            onChange={(event) => onFieldChange('author', event.target.value)}
            required
          />
          {formErrors.author && <span className="student-modal__error">{formErrors.author}</span>}
        </div>

        <div className={`student-modal__field ${formErrors.year ? 'has-error' : ''}`}>
          <label htmlFor="book-year">Year *</label>
          <input
            id="book-year"
            type="number"
            value={formState.year}
            onChange={(event) => onFieldChange('year', event.target.value)}
            min={1}
            required
          />
          {formErrors.year && <span className="student-modal__error">{formErrors.year}</span>}
        </div>

        <div className={`student-modal__field ${formErrors.category ? 'has-error' : ''}`}>
          <label htmlFor="book-category">Category *</label>
          <input
            id="book-category"
            type="text"
            value={formState.category}
            onChange={(event) => onFieldChange('category', event.target.value)}
            required
          />
          {formErrors.category && <span className="student-modal__error">{formErrors.category}</span>}
        </div>

        <footer className="student-modal__actions">
          <button type="button" className="student-modal__cancel" onClick={onClose}>
            CANCEL
          </button>
          <button type="submit" className="student-modal__submit">
            {mode === 'add' ? 'ADD' : 'SAVE'}
          </button>
        </footer>
      </form>
    </div>
  )
}

export default StudentModal
