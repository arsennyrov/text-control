import { FC } from "react";
import { myButton } from "../../models";
import MyButton from "./MyButton";
import control from './store';
import { observer } from "mobx-react-lite";
import "./TextControl.css";

interface TextControlProps {
  buttons: {
      side: string;
      title: string;
      callBack: string;
    }[];
}

const TextControl: FC<TextControlProps> = observer(({ buttons}) => {

  const mapButtons = (side: string) => {
    return buttons
      .slice()
      .filter((item: { side: string }) => item.side === side)
      .map((button: myButton, index: number) => (
        <MyButton 
          key={index}
          myButtonCurr={button}
          myButtonClick={button.callBack}
        />
      ));
  };

  return (
    <div className="textControl__wrapper">
      <div className="textControl__wrapper-leftSideBar">{mapButtons("L")}</div>
      <textarea 
        className="textControl__textarea" 
        value={control.getText()} 
        onChange={(e) => {control.putText(e.target.value)} }
      />
      <div className="textControl__wrapper-rightSideBar">{mapButtons("R")}</div>
    </div>
  );
});

export default TextControl;
