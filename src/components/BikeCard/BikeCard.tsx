/* eslint-disable prettier/prettier */

import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material';
import {
  CardTitle,
  Feature,
  FeatureList,
  RentButton,
  StyledCard,
} from './BikeCard.styled';
export default function BikeCard() {
  return (
    <StyledCard>
      <CardContent>
        <CardTitle gutterBottom>Original</CardTitle>
        <Typography color="textSecondary">From €14.90 per month</Typography>
        <FeatureList>
          <Feature>Gears: One speed</Feature>
          <Feature>Brake: Hand and coaster brakes</Feature>
          <Feature>Lock: Ring lock + chain lock</Feature>
          <Feature>Light: Hub powered LED light</Feature>
        </FeatureList>
      </CardContent>
      <CardActions>
        <RentButton>Check availability</RentButton>
      </CardActions>
    </StyledCard>
  );
}
