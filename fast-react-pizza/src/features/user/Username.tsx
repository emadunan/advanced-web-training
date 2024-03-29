import React from 'react';
import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block md:text-xl">
      {username}
    </div>
  );
};

export default Username;
