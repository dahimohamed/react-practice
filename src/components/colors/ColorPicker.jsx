import React, { useState } from 'react';

export const ColorPicker = ({
  colors,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen(state => !state);
  }

    return (
      <div
        className="colorPicker"
        style={{display: 'inline-block'}}
      >
        <button
          type="button"
          style={{ color: value }}
          onClick={toggleList}
        >
          {value || 'Choose a color'}
        </button>
        
        <ul>
          {isOpen &&
            (
              colors.map(color => (
              <li
                key={color}
                style={{ 'listStyle': 'none', color }}
                  onClick={() => {
                    onChange(color);
                    toggleList();
                }}
              >
                {color}
              </li>
            ))
          )}
        </ul>
      </div>
    );
}
