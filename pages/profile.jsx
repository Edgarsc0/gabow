//https://lh3.googleusercontent.com/a/AGNmyxZ5xyxeevdVMa4yKFXnQyH6uNg3Yh8deGfTaSZkrw=s96-c
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function BadgeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/AGNmyxZ5xyxeevdVMa4yKFXnQyH6uNg3Yh8deGfTaSZkrw=s96-c" />
      </StyledBadge>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/AGNmyxZ5xyxeevdVMa4yKFXnQyH6uNg3Yh8deGfTaSZkrw=s96-c" />
        }
      >
        <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/a/AGNmyxZ5xyxeevdVMa4yKFXnQyH6uNg3Yh8deGfTaSZkrw=s96-c" />
      </Badge>
    </Stack>
  );
}