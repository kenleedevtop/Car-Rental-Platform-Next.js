import React from 'react';

import { PaginationMain } from 'components/ui/pagination/styles';

import { TPaginationProps } from 'components/ui/pagination/types';

const Pagination = ({ align = 'right', ...props }: TPaginationProps) => (
  <PaginationMain align={align} variant="text" shape="rounded" {...props} />
);

export default Pagination;
