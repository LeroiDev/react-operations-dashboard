import React, {useEffect} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'

const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:1000}}>
          <TooltipComponent content="Settings" position="Top">
            <button type='button' className='text-3xl p-3 hover:drop-shadow-x1 hover:bg-light-gray text-white' 
            style={{background: 'blue', borderRadius:'50%'}}>
              <FiSettings></FiSettings>
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div>
              sidebar
          </div>
        ):
          (
            <div>
              sidebar
            </div>
          )
        }
      </div>
    </BrowserRouter>
  )
}
export default App