import { Button } from '@chakra-ui/react';
import React from 'react';
import CustomInput from '../UI/CustomInput';
import { ChevronRightIcon } from '@chakra-ui/icons';

function InfoBox() {
  return (
    <main className="loggedOutHome__infoBox">
      <div>
        <h1>
          Unlimited movies, TV <span> shows, and more. </span>
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
      </div>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="loggedOutHome__form">
        <CustomInput animation="true" type="email">
          Email Address
        </CustomInput>
        <Button
          h="auto"
          borderRadius="none"
          colorScheme="red"
          fontSize="1.6rem"
          fontWeight="400"
          rightIcon={<ChevronRightIcon />}
          p="0 3rem"
          bgColor="var(--color-netflix-red-light)"
        >
          Get Started
        </Button>
      </form>
    </main>
  );
}

export default InfoBox;
