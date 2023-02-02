import { FC } from 'react';
import { myButton } from '../../models';
import './MyButton.css';

interface MyBattonProps {
    myButtonCurr: myButton
    myButtonClick?: () => void
    text?: string
}

const MyButton: FC<MyBattonProps> = ({ myButtonCurr, myButtonClick }) => {

    return (
        <button onClick={myButtonClick} className='my-button'>
            {myButtonCurr.title}
        </button>
    );
};

export default MyButton; 