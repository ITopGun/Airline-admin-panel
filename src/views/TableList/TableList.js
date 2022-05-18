import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';


import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const customeStyles = makeStyles({
  root: {
    '& .super-app-theme--cell': {
      backgroundColor: 'rgba(224, 183, 60, 0.55)',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.negative': {
      backgroundColor: '#43a047',
      color: 'white',
      fontWeight: '600',
    },
    '& .super-app.positive': {
      backgroundColor: '#ffa726',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.infant': {
      backgroundColor: '#ffa31a',
      color: '#1a3e72',
      fontWeight: '600',
    },
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 110 },
  { field: 'ancillary', headerName: 'Ancillary service', width: 350 },
  
  {
    field: 'special',
    headerName: 'Special meals',
    description: 'Special meals',
    sortable: false,
    width: 160,
    cellClassName: (params) =>
    clsx('super-app', {
      negative: params.value === 'Required',
    }),
    
    // valueGetter: () => <Checkbox></Checkbox>
    // valueGetter: (params) =>
    //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },

  {
    field: 'seatN',
    headerName: 'Seat Number',
    type: 'number',
    width: 190,
    
  },

  { field: 'shop', headerName: 'Shop Request', width: 130 ,
    cellClassName: (params) =>
    clsx('super-app', {
      positive: params.value === 'Yes',
    }),
  },

];

const rows = [
  { id: 1, name: 'Snow', ancillary: 'Sandwiches/snacks/small meals', seatN: 35 , shop: 'Yes'},
  { id: 2, name: 'Lannister', ancillary: 'Foreign currency exchange', seatN: 42, special: 'Required', infant:'Yes' },
  { id: 3, name: 'Lannister', ancillary: 'Lottery tickets/scratch cards', seatN: 45 , shop: 'Yes'},
  { id: 4, name: 'Stark', ancillary: 'Priority boarding', seatN: 16 , special: 'Required'},
  { id: 5, name: 'Targaryen', ancillary: 'Seat upgrades', seatN: 93, shop: 'Yes', infant:'Yes' },
  { id: 6, name: 'Melisandre', ancillary: 'Seat upgrades', seatN: 150, special: 'Required', shop: 'Yes' },
  { id: 7, name: 'Clifford', ancillary: 'Comfort packs', seatN: 44, special: 'Required' , infant:'Yes' },
  { id: 8, name: 'Frances', ancillary: 'Fast track security', seatN: 36, shop: 'Yes' },
  { id: 9, name: 'Lannister', ancillary: 'Credit card charges', seatN: 45, special: 'Required', infant:'Yes' },
  { id: 10, name: 'Targaryen', ancillary: 'Flight change fees', seatN: 37 },
  { id: 11, name: 'Roxie', ancillary: 'Hotel rooms', seatN: 65, shop: 'Yes', infant:'Yes' },
  { id: 12, name: 'Lannister', ancillary: 'Car hire', seatN: 29 , shop: 'Yes'},
  { id: 13, name: 'Lannister', ancillary: 'Airport parking', seatN: 49, special: 'Required', infant:'Yes'},
  { id: 14, name: 'Stark', ancillary: 'Tours and activities', seatN: 18, special: 'Required' },
  { id: 15, name: 'Targaryen', ancillary: 'Foreign currency exchange', seatN: 17 , infant:'Yes'},
  { id: 16, name: 'Melisandre', ancillary: 'Online gaming', seatN: 157, special: 'Required'},
  { id: 17, name: 'Clifford', ancillary: 'Tickets to events', seatN: 82, shop: 'Yes' },
  { id: 18, name: 'Frances', ancillary: 'Seat backs', seatN: 39, shop: 'Yes' },
  { id: 19, name: 'Roxie', ancillary: 'Tray tables', seatN: 68 , special: 'Required', infant:'Yes'},
];

const top100Films = [
  { title: 'Snow', year: 1994 },
  { title: 'Lannister', year: 1972 },
  { title: 'Melisandre', year: 1974 },
  { title: 'Clifford', year: 2008 },
  { title: 'Stark', year: 1957 },
  { title: "Frances", year: 1993 },
  { title: 'Roxie', year: 1994 },
  { title: 'Targaryen', year: 2003 },
  { title: 'Melisandre', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'Lannister', year: 2001 },
  { title: 'Snow', year: 1980 },
  { title: 'Melisandre', year: 1994 },
  
];

export default function DataTable() {

const customeClasses = customeStyles();
const buttonClasses = useStyles();

const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };


  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = React.useState("Add ancillary service");

  const handleButtonClick = () => {
      console.log(title);
    if (title === "Add ancillary service") {
      setTitle("Add ancillary service");
    } else if(title === "Change meal preference") {
      setTitle("Change meal preference");
    }else if(title === "Add in-flight shop requests") {
      setTitle("Add in-flight shop requests");
    }
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <div style={{textAlign:'center', marginBottom:30}}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="success"
          size="large"
          className={buttonClasses.button}
          startIcon={<AddIcon />}
        > Add ancillary service </Button>


        <Button
          onClick={handleClickOpen1}
          variant="contained"
          color="primary"
          size="large"
          className={buttonClasses.button}
          startIcon={<SaveIcon />}
        > Change meal preference </Button>


        <Button
          onClick={handleClickOpen2}
          variant="contained"
          color="succes"
          size="large"
          className={buttonClasses.button}
          startIcon={<AddIcon />}
        > Add in-flight shop requests </Button>
      </div>

    
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add ancillary service
        </DialogTitle>
        <DialogContent dividers>
          Choose the Passenger Name
          <p></p>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          <p></p>
          <p></p>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Add ancillary service"
          variant="outlined"
        />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1}>
        <DialogTitle id="customized-dialog-title1" onClose={handleClose1}>
          Change meal preference
        </DialogTitle>
        <DialogContent dividers>
          Choose the Passenger Name
          <p></p>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          <p></p>
          <p></p>
          <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Add or Remove meal preference for a passenger"
      />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose1} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog onClose={handleClose2} aria-labelledby="customized-dialog-title" open={open2}>
        <DialogTitle id="customized-dialog-title2" onClose={handleClose2}>
          Add in-flight shop requests
        </DialogTitle>
        <DialogContent dividers>
          Choose the Passenger Name
          <p></p>
          <Autocomplete
            id="combo-box-demo"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          <p></p>
          <p></p>
          <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Add in-flight shop requests"
      />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose2} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

      <div style={{ height: 500, width: '100%' }} className={customeClasses.root}>
        <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
      </div>
    </div>
    
  );

  
}