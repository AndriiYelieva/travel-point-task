import React from 'react';
import { User } from '../../Types/User';
import { Link } from 'react-router-dom';

import './userCard.scss'

type Props = {
  user: User,
}

export const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <li className="user" data-testid="user-item">
      <p className="user__name" > {user.name}</p >
      <Link
        to={`/travel-point-task/user/${user.id}`}
        className="user__link"
      >
        Details
      </Link>
    </li>
  );
};
