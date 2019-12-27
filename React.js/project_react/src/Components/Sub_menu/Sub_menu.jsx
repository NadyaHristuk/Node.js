import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';


const Submenu = ({sub}) => {
    return (
        <ul className='sub-menu'>
            {sub.map(el=>
                <li className="sub-menu__item" key={`${el.parentKey}+${el.text}`}>
                    <NavLink className="sub-menu__link" to={el.link}>{el.text}</NavLink>
                    {/*<a href={el.link} className="sub-menu__link">{el.text}</a>*/}
                </li>)}
        </ul>
    )
};

Submenu.propTypes ={
    sub: PropTypes.arrayOf(
        PropTypes.shape({
                text:PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
                parentKey: PropTypes.string.isRequired,
            }
        ))
};

export default Submenu;