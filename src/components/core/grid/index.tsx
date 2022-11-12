import React from 'react';
import { GridMain } from 'components/core/grid/styles';
import { TGridProps } from 'components/core/grid/types';

const Grid = ({ ...props }: TGridProps) => <GridMain {...props} />;

export default Grid;
