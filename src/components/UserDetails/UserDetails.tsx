import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../Types/User';

import './userDetails.scss';

jest.mock('axios');

export const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const handleGoBack = () => {
    window.history.back();
  };
  
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <main className="details">
      <h1 className="details__title">User details</h1>
      {user ? (
        <>
          <button
            className="details__back"
            onClick={handleGoBack}
          >
            Back
          </button>
          <div className="details__wrapper">
            <div className="details__info" date-test="personallyInfo">
              Personally info:
              <p>Name: {user.name}</p>
              <a
                className="details__link"
                target="_blank"
                href={`mailto:${user.email}`}
                rel="noreferrer"
              >
                Email: {user.email}
              </a>
              <a
                className="details__link"
                target="_blank"
                href={`tel:${user.phone}`}
                rel="noreferrer"
              >
                Phone: {user.phone}
              </a>
            </div>

            <div className="details__info">
              Address info:
              <p>City: {user.address.city}</p>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
            </div>

            <div className="details__info">
              Contacts info:
              <p>Website: {user.website}</p>
              <p>Company name: {user.company.name}</p>
              <p>Catch phrase: {user.company.catchPhrase}</p>
            </div>
          </div>
        </>
      ) : (
        <h1 className="details__error">Loading user details...</h1>
      )}
    </main>
  );
};
