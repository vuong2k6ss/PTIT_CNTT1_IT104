import type { SortOption } from './types'

export const SORT_OPTIONS: Array<{ value: SortOption; label: string }> = [
  { value: 'title-asc', label: 'Title A → Z' },
  { value: 'title-desc', label: 'Title Z → A' },
  { value: 'author-asc', label: 'Author A → Z' },
  { value: 'author-desc', label: 'Author Z → A' },
  { value: 'year-desc', label: 'Year New → Old' },
  { value: 'year-asc', label: 'Year Old → New' },
]
