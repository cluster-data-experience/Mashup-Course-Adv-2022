import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SubMenu = ({ name, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const liClass = isOpen ? 'menu-item has-submenu submenu-opened' : 'menu-item has-submenu';
  const menuClass = isOpen ? 'nav inner-nav submenu collapse opened' : 'nav inner-nav submenu collapse';

  return (
    <li className={liClass} onClick={() => setIsOpen(!isOpen)}>
      <span>{name || "A submenu"}</span>
      <ul className={menuClass}>
        {items.map((item, index) => (
            <li className='submenu-item' key={index} onClick={(e) => e.stopPropagation()}>
              <NavLink to={item.link} className="submenu-link">{item.name}</NavLink>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default SubMenu;