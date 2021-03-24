import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
  
  const options = [
    {
      label: 'Filter by score',
      value: -1,
    },
    {
      label: 'All',
      value: 0,
    },
    {
      label: 'One',
      value: 1,
    },
    {
      label: 'Two',
      value: 2,
    },
    {
      label: 'Three',
      value: 3,
    },
    {
      label: 'Four',
      value: 4,
    },
    {
      label: 'Five',
      value: 5,
    },
  ];
  const [selected, setSelected] = useState(options[0]);

  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
     
        if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      

      <div 
        key={option.value}
        className="item"
        onClick={() => { 
          console.log("from drop - ",option.value)
          props.onFilterSelected(option.value);
          setSelected(option)
        }
      }
      >
        {option.label}

      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      
      <div className="field">
        
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''} ui floating dropdown labeled search icon button`}
        >
          

          <i className="star icon" ></i>

          {/* <i className="dropdown icon"></i> */}
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
