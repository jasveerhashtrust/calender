import { FC } from 'react'
import { startOfMonth, endOfMonth, differenceInDays, format } from 'date-fns'
import './calender.css'
import Cell from './cell'
import { useDispatch, useSelector } from 'react-redux'
import { changeMonthprevious, changeMonthfarward, changeYearfarward, changeYearprevious } from '../redux/Action'
import { getstate } from '../redux/selector'

const Calender: FC = () => {

    const dispatch = useDispatch()
    const val = useSelector(getstate)
    const startDate = startOfMonth(val);
    const endDate = endOfMonth(val);
    const numDays = differenceInDays(endDate, startDate) + 1;
    const prefixDays = startDate.getDay();
    const suffixDays = 6 - endDate.getDay();
    const nextMonth = (value: string) => { dispatch(changeMonthfarward(value)) }
    const prevMonth = (value: string) => { dispatch(changeMonthprevious(value)) }
    const nextYear = (value: string) => { dispatch(changeYearfarward(value)) }
    const prevYear = (value: string) => { dispatch(changeYearprevious(value)) }


    const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
        <div className='container'>
            <div className='grid-container'>
                <Cell children={"<<"} onClick={() => prevYear(val)} />
                <Cell children={"<"} onClick={() => prevMonth(val)} />
                <Cell children={format(val, "LLLL yyyy")} classname={"month"} />
                <Cell children={">"} onClick={() => nextMonth(val)} />
                <Cell children={">>"} onClick={() => nextYear(val)} />
                {weeks.map((week, index) => (
                    <Cell key={index} classname={"days"}>{week}</Cell>
                ))}
                {Array.from({ length: prefixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
                {Array.from({ length: numDays }).map((_, index) => (
                    <Cell key={index} children={index + 1} />
                ))}
                {Array.from({ length: suffixDays }).map((_, index) => (
                    <Cell key={index} />
                ))}
            </div>
        </div>
    )
}

export default Calender