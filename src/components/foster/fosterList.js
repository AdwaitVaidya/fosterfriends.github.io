import { useState } from 'react';
import { Button } from '@mui/material';
import { Box, Container, Grid } from '@mui/material';
import Select from 'react-select';
import { styled } from '@mui/material/styles';
import makeAnimated from 'react-select/animated';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));


const options = [
    {
      value: "Cat",
      label: 'Cat',
      selected: true,
    },
    {
      value: "Dog",
      label: 'Dog',
    },
    {
      label: 'Age',
      options: [
        {
          value: 4,
          label: "<1",
        },
        {
          value: 5,
          label: "1<x<6",
          selected: true,
        },
        {
          value: 6,
          label: '>6',
        },
      ],
    },
  ]

export const FilterList = (props) => {
  const [option, setOption] = useState([""]);
    
  const AddToOption = (event)=>{
    setOption(option.insert(event.value));
  }
const animatedComponents = makeAnimated();
return(
//   <div
//   style={{
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '10vh',
//   }}
// >
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
    <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    isMulti
    options={options}
    onChange={(event)=>{console.log(event)}}
  />
  </Box>
  </DashboardLayoutRoot>
// </div>
)
}