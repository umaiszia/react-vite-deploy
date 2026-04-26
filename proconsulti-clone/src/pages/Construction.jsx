import { Link } from 'react-router-dom';

function Construction({ title }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-5xl font-bold text-blue-900 mb-4">{title}</h1>
      <p className="text-gray-600 mb-8 text-lg">We are currently working on this section. Stay tuned!</p>
      <Link to="/" className="bg-blue-900 text-white px-8 py-3 rounded-full hover:bg-blue-800 transition-all">
        ← Back to Home
      </Link>
    </div>
  );
}
    
export default Construction;