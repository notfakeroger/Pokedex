import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [first, setFirst] = useState(0);

  const onPageChangeHandler = (event) => {
    setFirst(event.first);
    onPageChange(event.first);
  };

  return (
    <Paginator
      first={first}
      rows={itemsPerPage}
      totalRecords={totalItems}
      onPageChange={onPageChangeHandler}
      template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }}
    />
  );
};

export default Pagination;
