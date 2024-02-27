import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';

/* hooks */
import { useOutsideClick } from '../../hooks';

/* styles */
import {
  PortName,
  DropDownOptions,
  DropDownOption,
  InputComponent,
  SearchInputWrapper,
} from './styled';

interface Port {
  name: string;
  code: string;
}

interface SearchInputProps {
  id: string;
  name: string;
  query: string;
  data: Port[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (port: Port) => void;
  placeholder: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  id,
  name,
  query,
  data,
  handleChange,
  handleClick,
  placeholder,
  onKeyDown,
}) => {
  const refDropdownContainer = useRef<HTMLDivElement>(null);
  const isClickedOutside = useOutsideClick(refDropdownContainer);

  useEffect(() => {
    if (isClickedOutside) {
      setIsOpen(false);
    }
  }, [isClickedOutside]);

  const [isOpen, setIsOpen] = useState(false);

  function onChangeInternal(e: ChangeEvent<HTMLInputElement>): void {
    if (!isOpen) {
      setIsOpen(true);
    }
    if (handleChange) {
      handleChange(e);
    }
  }

  const filterPorts = ({
    port,
    query,
  }: {
    port: Port;
    query: string;
  }): boolean => {
    const isActivePort = port.name.toLowerCase().includes(query.toLowerCase());
    if (isActivePort || query === '') {
      return true;
    }
    return false;
  };

  const filteredResultsLength = data?.filter((port) =>
    filterPorts({ port, query })
  )?.length;

  const showResults = query?.length > 0 && filteredResultsLength > 0;
  const showEmptyMessage = query?.length > 0 && filteredResultsLength === 0;

  return (
    <SearchInputWrapper ref={refDropdownContainer}>
      <InputComponent
        name={name}
        value={query}
        id={id}
        placeholder={placeholder}
        onChange={onChangeInternal}
        onKeyDown={onKeyDown}
      />
      <DropDownOptions>
        {showResults &&
          isOpen &&
          data
            ?.filter((port) => filterPorts({ port, query }))
            ?.map((port) => (
              <PortName
                key={port.code}
                onClick={() => {
                  if (isOpen) {
                    setIsOpen(false);
                  }
                  handleClick(port);
                }}
              >
                {port.name} ({port.code})
              </PortName>
            ))}
        {showEmptyMessage && isOpen && (
          <DropDownOption>No Matching Result Found</DropDownOption>
        )}
      </DropDownOptions>
    </SearchInputWrapper>
  );
};

export default SearchInput;
