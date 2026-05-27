import React from 'react';

export type FilterType = 'All' | 'Today' | 'Completed' | 'Incomplete';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

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
          {filter}
        </button>
      ))}
    </div>
  );
};
