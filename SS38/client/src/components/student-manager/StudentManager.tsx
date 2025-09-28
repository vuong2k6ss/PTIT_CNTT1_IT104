import { type FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { Book } from '../../interface/book'
import {
  createBook,
  deleteBook,
  fetchBooks,
  updateBook,
  type BookPayload,
} from '../../apis/studentApi'
import LoadingOverlay from './LoadingOverlay'
import ErrorBanner from './ErrorBanner'
import StudentManagerHeader from './Header'
import StudentToolbar from './Toolbar'
import StudentList from './StudentList'
import StudentModal from './StudentModal'
import type { FormErrors, FormState, ModalMode, SortOption } from './types'
import '../../style/studentManager.css'

const initialFormState: FormState = {
  title: '',
  author: '',
  year: '',
  category: '',
}

const emptyFormErrors: FormErrors = {
  title: '',
  author: '',
  year: '',
  category: '',
}

const StudentManager = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortOption, setSortOption] = useState<SortOption>('title-asc')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<ModalMode>('add')
  const [activeBookId, setActiveBookId] = useState<number | null>(null)
  const [formState, setFormState] = useState<FormState>(initialFormState)
  const [formErrors, setFormErrors] = useState<FormErrors>(emptyFormErrors)

  const titleInputRef = useRef<HTMLInputElement | null>(null)

  const loadBooks = useCallback(async (withSpinner = true) => {
    if (withSpinner) {
      setLoading(true)
    }

    setError(null)

    try {
      const data = await fetchBooks()
      setBooks(data)
    } catch (err) {
      console.error(err)
      setError('Không thể tải danh sách sách. Vui lòng thử lại.')
    } finally {
      if (withSpinner) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    loadBooks()
  }, [loadBooks])

  useEffect(() => {
    if (isModalOpen) {
      requestAnimationFrame(() => titleInputRef.current?.focus())
    }
  }, [isModalOpen])

  const categories = useMemo(() => {
    const unique = Array.from(new Set(books.map((book) => book.category).filter(Boolean)))
    unique.sort((a, b) => a.localeCompare(b, 'vi', { sensitivity: 'base' }))
    return unique
  }, [books])

  const visibleBooks = useMemo(() => {
    let filtered = [...books]

    if (searchTerm.trim()) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.trim().toLowerCase()),
      )
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter((book) => book.category === categoryFilter)
    }

    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'title-asc':
          return a.title.localeCompare(b.title, 'vi', { sensitivity: 'base' })
        case 'title-desc':
          return b.title.localeCompare(a.title, 'vi', { sensitivity: 'base' })
        case 'author-asc':
          return a.author.localeCompare(b.author, 'vi', { sensitivity: 'base' })
        case 'author-desc':
          return b.author.localeCompare(a.author, 'vi', { sensitivity: 'base' })
        case 'year-asc':
          return a.year - b.year
        case 'year-desc':
          return b.year - a.year
        default:
          return 0
      }
    })

    return filtered
  }, [books, searchTerm, categoryFilter, sortOption])

  const resetForm = () => {
    setFormState(initialFormState)
    setFormErrors(emptyFormErrors)
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setCategoryFilter('all')
    setSortOption('title-asc')
  }

  const handleOpenAddModal = () => {
    setModalMode('add')
    setActiveBookId(null)
    resetForm()
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (book: Book) => {
    setModalMode('edit')
    setActiveBookId(book.id)
    setFormState({
      title: book.title,
      author: book.author,
      year: book.year ? String(book.year) : '',
      category: book.category,
    })
    setFormErrors(emptyFormErrors)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleFieldChange = (field: keyof FormState, value: string) => {
    setFormState((previous) => ({ ...previous, [field]: value }))
    setFormErrors((previous) => ({ ...previous, [field]: '' }))
  }

  const validateForm = () => {
    const trimmedTitle = formState.title.trim()
    const trimmedAuthor = formState.author.trim()
    const trimmedCategory = formState.category.trim()
    const yearValue = Number(formState.year)
    const nextErrors: FormErrors = { ...emptyFormErrors }

    if (!trimmedTitle) {
      nextErrors.title = 'Title không được bỏ trống'
    } else {
      const normalizedTitle = trimmedTitle.toLowerCase()
      const duplicate = books.find(
        (book) =>
          book.title.trim().toLowerCase() === normalizedTitle && book.id !== activeBookId,
      )
      if (duplicate) {
        nextErrors.title = 'Tiêu đề sách không được phép trùng'
      }
    }

    if (!trimmedAuthor) {
      nextErrors.author = 'Author không được bỏ trống'
    }

    if (!formState.year.trim()) {
      nextErrors.year = 'Year không được bỏ trống'
    } else if (!Number.isFinite(yearValue) || !Number.isInteger(yearValue)) {
      nextErrors.year = 'Year phải là số nguyên hợp lệ'
    } else if (yearValue <= 0) {
      nextErrors.year = 'Year phải lớn hơn 0'
    }

    if (!trimmedCategory) {
      nextErrors.category = 'Category không được bỏ trống'
    }

    setFormErrors(nextErrors)

    return !nextErrors.title && !nextErrors.author && !nextErrors.year && !nextErrors.category
  }

  const buildPayload = (): BookPayload => ({
    title: formState.title.trim(),
    author: formState.author.trim(),
    year: Number(formState.year),
    category: formState.category.trim(),
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) {
      return
    }

    const payload = buildPayload()

    setLoading(true)
    setError(null)

    try {
      if (modalMode === 'add') {
        await createBook(payload)
      } else if (activeBookId !== null) {
        await updateBook(activeBookId, payload)
      }

      await loadBooks(false)
      setIsModalOpen(false)
      resetForm()
    } catch (err) {
      console.error(err)
      setError('Không thể lưu dữ liệu. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (book: Book) => {
    const confirmed = window.confirm('Xác nhận xoá sách?')
    if (!confirmed) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      await deleteBook(book.id)
      await loadBooks(false)
    } catch (err) {
      console.error(err)
      setError('Không thể xoá sách. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="student-manager">
      {loading && <LoadingOverlay />}

  <StudentManagerHeader onAddBook={handleOpenAddModal} />

      {error && <ErrorBanner message={error} />}

      <StudentToolbar
        searchTerm={searchTerm}
        categoryFilter={categoryFilter}
        sortOption={sortOption}
        categories={categories}
        onSearchChange={(value) => setSearchTerm(value)}
        onCategoryChange={(value) => setCategoryFilter(value)}
        onSortChange={(value) => setSortOption(value)}
        onClear={handleClearFilters}
      />

      <StudentList
        students={visibleBooks}
        loading={loading}
        onEdit={handleOpenEditModal}
        onDelete={handleDelete}
      />

      <StudentModal
        open={isModalOpen}
        mode={modalMode}
        formState={formState}
        formErrors={formErrors}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        onFieldChange={handleFieldChange}
        titleInputRef={titleInputRef}
      />
    </div>
  )
}

export default StudentManager
