import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <div className="flex justify-center mb-8">
          <User className="w-24 h-24" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Avatar Creator</h1>
        <p className="text-xl mb-8">Create your unique avatar with our easy-to-use editor</p>
        <Link
          to="/editor"
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Start Creating
        </Link>
      </div>
    </div>
  );
}

export default Home