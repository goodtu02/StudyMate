import React from 'react';

export type FilterType = 'All' | 'Today' | 'Completed' | 'Incomplete';

interface FilterBarProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange }) => {
  const filters: FilterType[] = ['All', 'Today', 'Completed', 'Incomplete'];

  return (
    <div className="filter-bar" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            background: currentFilter === filter ? '#007bff' : '#f8f9fa',
            color: currentFilter === filter ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: currentFilter === filter ? 'bold' : 'normal'
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
