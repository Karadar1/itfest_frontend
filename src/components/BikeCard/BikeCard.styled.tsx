/* eslint-disable prettier/prettier */
import { Card, Typography, Button } from '@mui/material';

import styled from '@emotion/styled';

export const StyledCard = styled(Card)`
  max-width: 345px;
`;

export const CardTitle = styled(Typography)`
  && {
    margin-bottom: 0.35em;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Feature = styled.li`
  margin-bottom: 0.5em;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RentButton = styled(Button)`
  && {
    margin-top: 1em;
    width: 100%;
  }
`;
