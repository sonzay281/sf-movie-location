import React, { useState, useRef } from "react";
import Downshift from "downshift";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";

interface AutoComplete {
  id: string;
  placeholder?: string;
  listIcon?: any;
  items: any;
  onChange: any;
  onClear: any;
  value: any;
}
const AutoComplete = ({
  id,
  placeholder,
  listIcon,
  items,
  onChange,
  value,
  onClear
}: AutoComplete) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref: any = useRef(null);
  const onClick = () => {
    setIsOpen(false);
    ref.current.blur();
  };

  return (
    <Downshift
      onChange={onChange}
      itemToString={(item: any) => item || ""}
      initialInputValue={value}
      inputId={id}
    >
      {({ getInputProps, inputValue, getItemProps }: any) => (
        <div className={`${id}-wrapper`}>
          <div className="widget-header-content">
            <input
              id={id}
              ref={ref}
              className={id}
              placeholder={placeholder}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setIsOpen(false)}
              {...getInputProps()}
            />
            <div className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="clear">
              <FontAwesomeIcon icon={faTimes} onClick={onClear} />
            </div>
          </div>

          {isOpen && (
            <div className="widget--opened scroll" onClick={onClick}>
              {!!inputValue
                ? items
                    ?.filter((i: any) =>
                      i?.toUpperCase().includes(inputValue?.toUpperCase())
                    )
                    ?.map((item: string, index: number) => (
                      <div
                        className="movie__item padding-content"
                        {...getItemProps({
                          key: item,
                          index,
                          item
                        })}
                      >
                        {listIcon && (
                          <span className="icon margin-r--small">
                            <FontAwesomeIcon icon={listIcon} />
                            &nbsp;&nbsp;
                          </span>
                        )}
                        {item}
                      </div>
                    ))
                : ""}
            </div>
          )}
        </div>
      )}
    </Downshift>
  );
};

export default AutoComplete;
