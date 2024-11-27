import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Erik's Projects</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-200">Home</a></li>
              <li><a href="#" className="hover:text-blue-200">Projects</a></li>
              <li><a href="#" className="hover:text-blue-200">About</a></li>
              <li><a href="#" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 p-4">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome to My Projects</h2>
          <p className="text-gray-600">
            Here you'll find a collection of my personal projects and work.
            Feel free to explore and learn more about what I've been working on.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-8 p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Erik's Projects. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;