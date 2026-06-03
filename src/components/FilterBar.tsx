import React from 'react';

export type FilterType = 'All' | 'Today' | 'Completed' | 'Incomplete';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filterLabels: Record<FilterType, string> = {
  All: '전체',
  Today: '오늘',
  Completed: '완료',
  Incomplete: '미완료',
};

export const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange }) => {
  const filters: FilterType[] = ['All', 'Today', 'Completed', 'Incomplete'];

  return (
    <div className="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`filter-tab-btn ${currentFilter === filter ? 'active' : ''}`}
        >
          {filterLabels[filter]}
        </button>
      ))}
    </div>
  );
};
