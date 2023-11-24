import Container from "./ui/container";

export interface User {
  name: string;
  mail: string;
  image: string;
}

const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <Container>
      <div className="flex items-center justify-center h-fit">
        <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row">
          <h2 className="text-xl font-medium text-red-600">{user.mail}</h2>
          <img className="w-auto h-48" src={user.image} alt={user.name} />
        </div>
          <h2 className="text-xl font-medium text-red-600">{user.mail}</h2>
      </div>
    </Container>
  );
};

export default UserCard;
