import React from 'react';

import { PaginationMain } from 'components/ui/pagination/styles';

import { TPaginationProps } from 'components/ui/pagination/types';

const Pagination = ({ ...props }: TPaginationProps) => (
  <PaginationMain variant="text" shape="rounded" {...props} />
);

export default Pagination;
