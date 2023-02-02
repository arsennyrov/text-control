import control from '../UI/TextControl/store';
import { myButton } from '../models';

export const text = 'Сама компания очень успешная. Выбор удовольствия дискомфорта является здесь ошибкой, он обвиняет удовольствие в боли, но когда он ненавидит что-либо видеть. Сбежит ли он из пустыни с болью, которую хочет?'
control.putText(text)

export const buttonsRight: myButton[] = 
  [
    {
      side: 'R', 
      title: 'Clear', 
      callBack: () => {control.putText('')}
    },
    
    {
      side: 'R', 
      title: 'Привет!', 
      callBack: () => {control.putText('Привет, мир!')}
    }   
  ]

export const buttonsLeft: myButton[] = 
  [
    {
      side: 'L', 
      title: 'Number!', 
      callBack: () => {
        (!Number.isNaN(+control.getText())) && alert(control.getText())
      }
    },
    {
      side: 'R', 
      title: 'Alert', 
      callBack: () => {alert(control.getText())}
      } 
   ]
