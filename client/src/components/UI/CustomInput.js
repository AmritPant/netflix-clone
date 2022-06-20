import React, { useState } from 'react';
import { Input, FormLabel } from '@chakra-ui/react';

function CustomInput({
  animation = false,
  type = 'text',
  children,
  placeholder = '',
}) {
  const [curClass, setClass] = useState('');

  const onFocusHandler = function () {
    if (!animation) return;
    setClass('labelAnimation');
  };

  const onBlurHandler = function (event) {
    if (event.target.value.trim().length === 0) return setClass('');
    return '';
  };

  return (
    <>
      <input
        type={type}
        id={children}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        placeholder={animation ? '' : placeholder}
      />
      {animation && (
        <FormLabel
          htmlFor={children}
          pos="absolute"
          top="30%"
          left="1rem"
          color="#444"
          fontSize="1.6rem"
          transition="all 0.3s"
          className={curClass}
        >
          {children}
        </FormLabel>
      )}
    </>
  );
}

export default CustomInput;
