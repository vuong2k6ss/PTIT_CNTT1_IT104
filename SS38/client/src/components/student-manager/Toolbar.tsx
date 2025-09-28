import type { SortOption, StudentToolbarProps } from './types'
import { SORT_OPTIONS } from './constants'

const StudentToolbar = ({
  searchTerm,
  categoryFilter,
  sortOption,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
  onClear,
}: StudentToolbarProps) => (
  <section className="student-manager__toolbar">
    <div className="toolbar__search">
      <input
        type="text"
        placeholder="Tìm theo tiêu đề"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
    <div className="toolbar__select">
      <label>
        <span>Category</span>
        <select value={categoryFilter} onChange={(event) => onCategoryChange(event.target.value)}>
          <option value="all">Tất cả</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
    <div className="toolbar__select">
      <label>
        <span>Sắp xếp</span>
        <select
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value as SortOption)}
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
    <button className="toolbar__clear" type="button" onClick={onClear}>
      CLEAR
    </button>
  </section>
)

export default StudentToolbar
