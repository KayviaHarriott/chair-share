import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface GridProps {
  container?: boolean;
  item?: boolean;
  xs?: number | boolean;
  sm?: number;
  md?: number;
  lg?: number;
  spacing?: number;
  children?: ReactNode;
  sx?: any;
  alignItems?: string;
  key?: string;
}

export const Grid = ({ container, item, xs, sm, md, lg, spacing, children, sx, alignItems, ...props }: GridProps) => {
  if (container) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: spacing ? `${spacing * 8}px` : 0,
          margin: spacing ? `-${spacing * 4}px` : 0,
          alignItems,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  if (item) {
    const getWidth = () => {
      if (xs === true) return '100%';
      if (xs) return `${(xs / 12) * 100}%`;
      if (sm) return { xs: '100%', sm: `${(sm / 12) * 100}%` };
      if (md) return { xs: '100%', md: `${(md / 12) * 100}%` };
      if (lg) return { xs: '100%', lg: `${(lg / 12) * 100}%` };
      return '100%';
    };

    return (
      <Box
        sx={{
          width: getWidth(),
          flexShrink: 0,
          padding: spacing ? `${spacing * 4}px` : 0,
          ...sx,
        }}
        {...props}
      >
        {children}
      </Box>
    );
  }

  return <Box sx={sx} {...props}>{children}</Box>;
};
