import React from 'react'
import "./SidebarOption.css"

function SidebarOption({Icon, Title, Number, selected}) {
  return (
    <div className={`SidebarOption ${selected && "SidebarOption--active"}`}>
        <Icon />
        <h3>{Title}</h3>
        <p>{Number}</p>
    </div>
  )
}

export default SidebarOption