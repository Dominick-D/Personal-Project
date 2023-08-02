import React from 'react';
import { Card } from 'react-native-elements';

interface User {
  id: number;
  name: string;
  // Add other user attributes here
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <Card.Title>{user.name}</Card.Title>
      <Card.Divider/>
      {/* Add more user details here */}
    </Card>
  );
};

export default UserCard;
