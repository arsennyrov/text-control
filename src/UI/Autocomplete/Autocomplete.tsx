import { FC, useEffect, useState } from "react";
import { getCountryByName } from "../../api/apiService";
import "./Autocomplete.css";

interface IAutocomplete {
  count: number;
}

const Autocomplete: FC<IAutocomplete> = ({ count }) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>();
  const textItem: string[] = text.split(" ");
  const realTextItem = textItem.slice(textItem.length - 1).join("");

  useEffect(() => {
    const loadResult = async () => {
      const res = await getCountryByName(realTextItem);
      setResult(res);
    };
    loadResult();
  }, [realTextItem]);

  return (
    <div>
      <textarea
        placeholder="Введите текст на русском языке"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="autocomlete__wrapper">
        {result
          ?.slice(0, count)
          .map((item: { flag: string; name: string; fullName: string }) => {
            return (
              <div className="autocomlete__item">
                <div
                  className="autocomlete__item-name"
                  onClick={() => {
                    const textArray = text.split(' ')
                    textArray.splice(textArray.length - 1, 1, item.name)
                    setText(textArray.join(' '))
                  }}
                >
                  {item.name}
                </div>
                <div
                  className="autocomlete__item-full-name"
                  onClick={() => {
                    const textArray = text.split(' ')
                    textArray.splice(textArray.length - 1, 1, item.fullName)
                    setText(textArray.join(' '))
                  }}
                >
                  {item.fullName}
                </div>{" "}
                <img src={item.flag} alt="flag" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Autocomplete;
