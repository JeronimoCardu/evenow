export default function Profile({ currentUser }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">User {currentUser?.name}</h1>
      <p>
        This is the profile page. User details and settings will be displayed
        here.
      </p>
    </div>
  );
}
