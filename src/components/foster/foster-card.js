import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';

export const FosterCard = ({ foster, ...rest }) => (

  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="foster"
          src= {"/static/animalphotos/"+foster.photo}//{"src\\icons\\animalphotos\\"+foster.photo}
          variant="square"
          sx={{ width: 146, height: 146 }}
        />
      </Box> 
      <Typography
        align="center"
        color="textPrimary"
        variant="h5"
      >
        {foster.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {foster.animal+","+ foster.zipcode+","+ foster.sex+","+ foster.neuter}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ClockIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
        </Grid>
      </Grid>
    </Box>
  </Card>
);

FosterCard.propTypes = {
  foster: PropTypes.object.isRequired
};
