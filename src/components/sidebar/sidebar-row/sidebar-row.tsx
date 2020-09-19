import React from 'react';
import './sidebar-row.css';

interface IProps {
  title: string;
  icon: any;
  selected?: boolean;
}

const SidebarRow = (props: IProps) => {
  const Icon = props.icon;
  const selected = props.selected ? "selected" : "";
  return (
    <div className={`sidebar-row ${selected}`}>
      <Icon className="sidebar-row-icon" />
      <h2 className="sidebar-row-title">{props.title}</h2>
    </div>
  );
}

export default SidebarRow;
