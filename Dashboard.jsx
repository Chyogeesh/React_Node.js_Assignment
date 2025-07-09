function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">John Doe</td>
            <td className="border p-2">john@example.com</td>
            <td className="border p-2">1990-01-01</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Jane Smith</td>
            <td className="border p-2">jane@example.com</td>
            <td className="border p-2">1995-05-15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
