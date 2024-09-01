// components/UserButton.js
import { UserButton } from '@clerk/clerk-react';

const CustomUserButton = () => (
  <UserButton
    appearance={{
      elements: {
        userButtonAvatarBox: 'border-2 border-gray-300 rounded-full',
        userButtonPopoverCard: 'shadow-lg',
      },
    }}
  />
);

export default CustomUserButton;
