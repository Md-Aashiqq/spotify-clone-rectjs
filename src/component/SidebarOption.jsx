import React from 'react'
import "../css/SidebarOption.css";

function SidebarOption({title,Icon}) {
    return (
        <div className='sidebar__option'>
            {Icon && <Icon className='sidebaroption__icon' />}
            {Icon ? <h4> {title} </h4> : <p>{title}</p>}

            {/* <p>{title}</p> */}
        </div>
    )
}

export default SidebarOption
