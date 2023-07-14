import { light } from '@/assets/themes';
import React from 'react';
import styled from 'styled-components/native';
import { ButtonMain } from '../buttons';
import LocalNavigationBarText from '../commons/LocalNavigationBarText';

interface PlanContainerProps {
  children: React.ReactNode;
  navigationBarText: string;
  buttonText?: string;
}

const PlanContainer = ({
  children,
  navigationBarText,
  buttonText = '다음',
}: PlanContainerProps) => {
  return (
    <StPlanContainer>
      <LocalNavigationBarText text={navigationBarText} />
      {children}
      <StButtonBox>
        <ButtonMain>{buttonText}</ButtonMain>
      </StButtonBox>
    </StPlanContainer>
  );
};

export default PlanContainer;

const StPlanContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const StButtonBox = styled.View`
  width: 100%;
  height: 60px;
  border-top-width: 1px;
  border-color: ${light.border.borderSub};
  background-color: ${light.background};
  justify-content: center;
  align-items: center;
`;
