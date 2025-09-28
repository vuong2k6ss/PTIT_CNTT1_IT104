import type { FormEvent, RefObject } from 'react'
import type { Book } from '../../interface/book'

export type SortOption = 'title-asc' | 'title-desc' | 'author-asc' | 'author-desc' | 'year-desc' | 'year-asc'

export type ModalMode = 'add' | 'edit'

export type FormState = {
	title: string
	author: string
	year: string
	category: string
}

export type FormErrors = {
	title: string
	author: string
	year: string
	category: string
}

export type StudentManagerState = {
	students: Book[]
	loading: boolean
	error: string | null
	searchTerm: string
	categoryFilter: string
	sortOption: SortOption
	isModalOpen: boolean
	modalMode: ModalMode
	activeBookId: number | null
	formState: FormState
	formErrors: FormErrors
}

export type StudentModalProps = {
	open: boolean
	mode: ModalMode
	formState: FormState
	formErrors: FormErrors
	onClose: () => void
	onSubmit: (event: FormEvent<HTMLFormElement>) => void
	onFieldChange: (field: keyof FormState, value: string) => void
	titleInputRef: RefObject<HTMLInputElement | null>
}

export type StudentToolbarProps = {
	searchTerm: string
	categoryFilter: string
	sortOption: SortOption
	categories: string[]
	onSearchChange: (value: string) => void
	onCategoryChange: (value: string) => void
	onSortChange: (value: SortOption) => void
	onClear: () => void
}

export type StudentListProps = {
	students: Book[]
	loading: boolean
	onEdit: (student: Book) => void
	onDelete: (student: Book) => void
}

export type StudentCardProps = {
	student: Book
	onEdit: (student: Book) => void
	onDelete: (student: Book) => void
}
