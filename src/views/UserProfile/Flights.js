import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import TextField from '@material-ui/core/TextField';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import { DataGrid, RightEmptyCell } from '@material-ui/data-grid';

import clsx from 'clsx';


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

import "assets/css/style.css";

const useStyles = makeStyles(styles);

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
      backgroundColor: '#33cccc',
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
  { field: 'name', headerName: 'Name', width: 180 },
  { field: 'ancillary', headerName: 'Ancillary service', width: 270 },
  {
    field: 'seatN',
    headerName: 'Seat Number',
    type: 'number',
    width: 90,
    
  },
  {
    field: 'checkin',
    headerName: 'Checked in',
    description: 'Check In',
    sortable: false,
    width: 160,
    cellClassName: (params) =>
    clsx('super-app', {
      negative: params.value === 'checked',
    }),
    
    // valueGetter: () => <Checkbox></Checkbox>
    // valueGetter: (params) =>
    //   `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  { field: 'wheel', headerName: 'Wheel chair', width: 130 ,
    cellClassName: (params) =>
    clsx('super-app', {
      positive: params.value === 'Yes',
    }),
  },
  { field: 'infant', headerName: 'Infant', width: 130,

    cellClassName: (params) =>
    clsx('super-app', {
      infant: params.value === 'Yes',
    }),
  },
];

const rows = [
  { id: 1, name: 'Snow', ancillary: 'Tray tables', seatN: 35 , wheel: 'Yes'},
  { id: 2, name: 'Lannister', ancillary: 'Seat back', seatN: 42, checkin: 'checked', infant:'Yes' },
  { id: 3, name: 'Lannister', ancillary: 'Tickets to events', seatN: 45 , wheel: 'Yes'},
  { id: 4, name: 'Stark', ancillary: 'Online gaming', seatN: 16 , checkin: 'checked'},
  { id: 5, name: 'Targaryen', ancillary: 'Tours and activities', seatN: 93, wheel: 'Yes', infant:'Yes' },
  { id: 6, name: 'Melisandre', ancillary: 'Airport parking', seatN: 150, checkin: 'checked', wheel: 'Yes' },
  { id: 7, name: 'Clifford', ancillary: 'Car hire', seatN: 44, checkin: 'checked' , infant:'Yes' },
  { id: 8, name: 'Frances', ancillary: 'Hotel rooms', seatN: 36, wheel: 'Yes' },
  { id: 9, name: 'Lannister', ancillary: 'Flight change fees', seatN: 45, checkin: 'checked', infant:'Yes' },
  { id: 10, name: 'Targaryen', ancillary: 'Credit card charges', seatN: 37 },
  { id: 11, name: 'Roxie', ancillary: 'Fast track security', seatN: 65, wheel: 'Yes', infant:'Yes' },
  { id: 12, name: 'Lannister', ancillary: 'Comfort packs', seatN: 29 , wheel: 'Yes'},
  { id: 13, name: 'Lannister', ancillary: 'Jaime', seatN: 49, checkin: 'checked', infant:'Yes'},
  { id: 14, name: 'Stark', ancillary: 'Seat upgrades', seatN: 18, checkin: 'checked' },
  { id: 15, name: 'Targaryen', ancillary: 'Daenerys', seatN: 17 , infant:'Yes'},
  { id: 16, name: 'Melisandre', ancillary: 'Priority boarding', seatN: 157, checkin: 'checked'},
  { id: 17, name: 'Clifford', ancillary: 'Lottery tickets/scratch cards', seatN: 82, wheel: 'Yes' },
  { id: 18, name: 'Frances', ancillary: 'Foreign currency exchange', seatN: 39, wheel: 'Yes' },
  { id: 19, name: 'Roxie', ancillary: 'Sandwiches/snacks/small meals', seatN: 68 , checkin: 'checked', infant:'Yes'},
];

export default function Dashboard() {
    
  const classes = useStyles();
  const customeClasses = customeStyles();
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");

  const handleFixedClick = () => {
      console.log(fixedClasses);
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
 
  return (
    <div>

    <div className={fixedClasses}>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                253
                <br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              <Icon>person</Icon>
                <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>245<br></br><p className={classes.cardCategory}>Agra To Khajuraho Flights. 3334 , 28 Nov 2020</p></h3>
              
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>175<br></br><p className={classes.cardCategory}>Hyderabad To Aurangabad Flights. 2394 , 25 Jan 2021</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>641<br></br><p className={classes.cardCategory}>Vadodara To Aurangabad Flights. 4349 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>
                351<br></br><p className={classes.cardCategory}>Delhi To Bengaluru Flights. 4396 , 30 Jan 2021</p>
              </h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats} style={{cursor: 'pointer', textDecoration:'underline'}}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>361<br></br><p className={classes.cardCategory}>Lucknow To Aurangabad Flights. 4346 , 28 Nov 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>275<br></br><p className={classes.cardCategory}>Coimbatore To Aurangabad Flights. 4288 , 01 Dec 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                 <Icon>airplanemode_active</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Passengers</p>
              <h3 className={classes.cardTitle}>145<br></br><p className={classes.cardCategory}>Chennai To Aurangabad Flights. 3150 , 11 Dec 2020</p></h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
              <Icon>person</Icon>
              <div onClick={handleFixedClick} style={{cursor: 'pointer', textDecoration:'underline'}}>
                    View more passengers
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      

      
    </div>
    <div  >
      
      <div className={fixedClasses === "dropdown" ? "dropdown show" : "dropdown"}>
        <div style={{textAlign:'right'}}>
          <TextField id="standard-basic" label="Filtering Table"/>
        <p></p>
        </div>
        
        <div style={{ height: 500, width: '100%' }} className={customeClasses.root}>
          <DataGrid rows={rows} columns={columns} pageSize={7} checkboxSelection />
        </div>
      </div>
    </div>
      
    </div>
  );
}