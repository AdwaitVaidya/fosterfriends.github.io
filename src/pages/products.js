import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { fosters } from '../__mocks__/fosters';
import { FosterListToolbar } from '../components/foster/foster-list-toolbar';
import { FosterCard } from '../components/foster/foster-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Page = () => (
  <>
    <Head>
      <title>
        fosters | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <FosterListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {fosters.map((foster) => (
              <Grid
                item
                key={foster.id}
                lg={4}
                md={6}
                xs={12}
              >
                <FosterCard foster={foster} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
