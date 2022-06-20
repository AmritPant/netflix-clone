import React from 'react';
import CustomInput from '../UI/CustomInput';

function LoginBox() {
  const inputs = [
    { name: 'Email or Phone Number', type: 'email' },
    { name: 'Password', type: 'password' },
  ];
  return (
    <section className="login__loginBox">
      <h1>Sign In</h1>
      <form>
        {inputs.map(input => {
          return (
            <React.Fragment key={input.type}>
              <CustomInput
                type={input.type}
                bgColor="#333"
                color="#fff"
                animation="true"
                h="4.5rem"
                w="28rem"
                lablelColor="#8c8c8c"
              >
                {input.name}
              </CustomInput>
              <br />;
            </React.Fragment>
          );
        })}

        <br />
        <button className="button-primary button-primary-big">Sign In</button>
      </form>
    </section>
  );
}

export default LoginBox;
