interface User {
  id: number;
  name: string;
}

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  console.log("users", users);

  return (
    <>
      {users &&
        users.map((user: User, index: number) => (
          <div key={index}>{user.name}</div>
        ))}
    </>
  );
};

export default Home;
