import './index.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-6">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
