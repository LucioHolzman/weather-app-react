import React, { useState } from "react";
import "./input.scss";
const Input = ({nameLabel = 'Default', nameInput = 'Default', typeValue = 'text', colorLabel = '#fff', colorInput = '#fff',value = undefined, onChangeValue = undefined, valueError = '', checkError = false}) => {

  const [comparison, setComparison] = useState(false);
  const inputValueUpdate = e => e.target.value !== "" ? setComparison(true) : setComparison(false);

  return (
    <>
        <div className="container-input">
          <label 
          htmlFor="" 
          className={`label ${comparison?'active-input':'off-input'}`}
          style={{color: colorLabel}}
          >
            {nameLabel}
          </label>
          <input
            type={typeValue}
            className="input"
            onChange={inputValueUpdate}
            name={nameInput}
            onFocus={() => {setComparison(true)}}
            onBlur={inputValueUpdate}
            style={{color: colorInput},{borderBottom:`1px solid ${colorInput}`}}
            value={value}
            onChange={onChangeValue}
          />
          {checkError === true ? 
          <div className="error-msg">
            <p>{valueError}</p>
          </div>
          : 
          <>
          </>
          }
        </div>
    </>
  );
};

export default Input;
