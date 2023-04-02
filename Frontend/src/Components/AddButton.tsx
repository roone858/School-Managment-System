import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const AddButton = (props:any) => {
     const [isCreateOpen, setIsCreateOpen] = useState(false);
  return (
     <Link
        onClick={() => {
          isCreateOpen ? setIsCreateOpen(false) : setIsCreateOpen(true);
        }}
        to={isCreateOpen ? `/${props.entity}s` : `/${props.entity}s/add`}
        type="button"
        className="btn btn-success mr-3"
      >
        {props.text}
      </Link>
  )
}
