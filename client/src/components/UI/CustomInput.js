import React, { useState } from 'react';
import { FormLabel } from '@chakra-ui/react';

function CustomInput({
  animation = false,
  type = 'text',
  children,
  placeholder = '',
  bgColor,
  color,
  h,
  w,
  lablelColor,
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
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type={type}
        id={children}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        placeholder={animation ? '' : placeholder}
        style={{
          backgroundColor: bgColor,
          color: color,
          height: h,
          width: w ? w : '100%',
          fontSize: '1.6rem',
          outline: 'none',
          padding: '0.5rem 1rem 0 1rem',
        }}
      />
      {animation && (
        <FormLabel
          htmlFor={children}
          pos="absolute"
          top="30%"
          left="1rem"
          color={lablelColor}
          fontSize="1.6rem"
          transition="all 0.3s"
          className={curClass}
        >
          {children}
        </FormLabel>
      )}
    </div>
  );
}

export default CustomInput;
