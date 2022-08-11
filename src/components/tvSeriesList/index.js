import React from 'react';
import TVSeries from '../tvSeriesCard';
import Grid from '@material-ui/core/Grid';

const TVSeriesList = ({ tvSeries, action }) => {
  let tvSeriesCards = tvSeries.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TVSeries key={m.id} tvSeries={m} action={action} />
    </Grid>
  ));
  return tvSeriesCards;
};

export default TVSeriesList;