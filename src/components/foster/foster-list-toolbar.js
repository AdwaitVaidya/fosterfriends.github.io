import { Filter } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import Modal from 'react-modal';
import { FilterList } from '../foster/fosterList';
function sayHello() {
  alert('You clicked me!');
} 

export const FosterListToolbar = (props) =>{

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
}

const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false)
}
return(
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Foster
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button onClick={setModalIsOpenToTrue}>Filter</Button>;
      <Modal isOpen={modalIsOpen}>
      <div
  style={{
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'right',
    height: '10vh',
  }}
>
      <Button onClick={setModalIsOpenToFalse}>Filter</Button>;
      </div>
                <FilterList/>
            </Modal>
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search Fosters"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>);
}
