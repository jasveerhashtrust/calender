import { FC } from 'react'
import "./cell.css"
interface CellProps {
    children?: any;
    classname?: string
    onClick?: any;
}

const Cell: FC<CellProps> = ({ children, classname, onClick }) => {
    return (
        <div className={`${classname} modifier`} onClick={onClick} > {children}</div >
    )
}

export default Cell