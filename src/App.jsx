// src/App.jsx
import './index.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-gray-100 p-6">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
