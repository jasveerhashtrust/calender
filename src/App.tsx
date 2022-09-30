
import Calender from './calender/calender';
import './App.css'
import { format } from 'date-fns'
import { useSelector } from 'react-redux'
import { getstate } from './redux/selector';
function App() {
  const currentdate = useSelector(getstate)
  return (
    <div className="Container">
      <p> <strong>Selected Date: </strong>
        {format(currentdate, "dd LLLL yyyy")}</p>
      <Calender />
    </div>
  );
}

export default App;
