
import './App.css';
import router from './Layout/Routs';
import { RouterProvider } from 'react-router-dom';


function App() {

  return (
    <div>
      <div className="max-w-7xl mx-auto bg-slate-800 text-white">
        <RouterProvider router={router}>

        </RouterProvider>
      </div>

    </div>

  );
}

export default App;
