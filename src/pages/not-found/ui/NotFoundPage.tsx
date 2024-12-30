import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-red-600">404</h2>
      <p className="text-lg text-gray-700 mb-4">Страница не найдена</p>
      <Link to="/" className="text-blue-600 underline">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
