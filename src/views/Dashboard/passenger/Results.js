import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  Tooltip,
  TableHead,
  Input,
  TablePagination,
  TableRow,
  Typography,
  makeStyles,
  TextField,
  SvgIcon
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import Close from '@material-ui/icons/Close';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Search as SearchIcon } from 'react-feather';
import getInitials from './getInitials.js';
import 
{
  primaryColor,
  dangerColor,blackColor, hexToRgb
} from 'assets/jss/material-dashboard-react.js';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  },
  edit: {
    backgroundColor: "transparent",
    color: primaryColor[0],
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: dangerColor[0],
    boxShadow: "none"
  },
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    lineHeight: "1.7em",
    border: "none",
    borderRadius: "3px",
    boxShadow:
      "0 8px 10px 1px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 3px 14px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 5px 5px -3px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto"
  }
}));

const Results = ({ className, customers, ...rest }) => {
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [opentwo, setOpentwo] = React.useState(false);

  const handleClickOpentwo = () => {
    setOpentwo(true);
  };

  const handleClosetwo = () => {
    setOpentwo(false);
  };


  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <div style={{textAlign:'right'}}> 
        <TextField
        maxWidth={10}
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
          placeholder="Birthday..."
        />
        &nbsp;
          <TextField
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
            placeholder="Passport..."
          />
          &nbsp;
          <TextField
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
            placeholder="Address..."
          />
      </div>


      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                  
                </TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                   
                </TableCell>
                <TableCell>
                  
                </TableCell>
                <TableCell>
                  
                </TableCell>
                <TableCell>
                
                </TableCell>
                <TableCell>

                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                Birthday
                </TableCell>
                <TableCell>
                  Address
                </TableCell>
                <TableCell>
                  Passport
                </TableCell>
                <TableCell>
                Ancillary Services
                </TableCell>
                <TableCell>
                Seat Number
                </TableCell>
                <TableCell>
                Actions
                </TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={customer.avatarUrl}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('YYYY-MM-DD')}
                  </TableCell>
                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  
                  <TableCell>
                    {customer.service}
                  </TableCell>
                  <TableCell>
                    {customer.seatnumber}
                  </TableCell>
                  <TableCell>
                  <Tooltip
                    id="tooltip-top"
                    title="Edit Task"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Edit"
                      className={classes.tableActionButton}
                      onClick={handleClickOpen}
                    >
                      <Edit
                        className={
                          classes.tableActionButtonIcon + " " + classes.edit
                        }
                      />
                    </IconButton>
                  </Tooltip>
                      <Tooltip
                        id="tooltip-top-start"
                        title="Remove"
                        placement="top"
                        classes={{ tooltip: classes.tooltip }}
                      >
                    <IconButton
                      aria-label="Close"
                      className={classes.tableActionButton}
                      onClick={handleClickOpentwo}
                    >
                      <Close
                        className={
                          classes.tableActionButtonIcon + " " + classes.close
                        }
                      />
                    </IconButton>
                    </Tooltip>
                  </TableCell>
                  
                  
                </TableRow>
              ))}


            </TableBody>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Passenger Update</DialogTitle>
                <DialogContent>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Name"
                          type="email"
                          variant="outlined"
                        />
                    
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                          <form className={classes.container} noValidate>
                            <TextField
                              variant="outlined"
                              id="date"
                              label="Birthday"
                              type="date"
                              defaultValue="2017-05-24"
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </form>
                    </GridItem>
                  </GridContainer>
                      
                  <TextField
                    margin="dense"
                    id="name"
                    label="Address"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                  <GridContainer>
                    <GridItem>
                        <TextField
                          margin="dense"
                          id="name"
                          label="Passport"
                          type="email"
                          fullWidth
                          variant="outlined"
                        />
                    </GridItem>
                    <GridItem>
                      <TextField
                          margin="dense"
                          id="name"
                          label="Seat Number"
                          type="email"
                          fullWidth
                          variant="outlined"
                      />
                    </GridItem>
                  </GridContainer>
                  
                  
                  <TextField
                    margin="dense"
                    id="name"
                    label="Acillary Services"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />            
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary" variant="contained" startIcon={<CloudUploadIcon />}>
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
              <Dialog open={opentwo} onClose={handleClosetwo} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                <DialogContent>
                    <p><b>Are you sure you want to delete?</b></p>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClosetwo} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClosetwo} color="secondary" variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
