import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./UserAvatarOne.css"
import PersonIcon from '@material-ui/icons/Person';


function UserAvatarOne(props) {

    const { guestCardOneData } = props;

    return (

        <div className="UserAvatarOne">


            <Grid container spacing={props.spacing}>

                {guestCardOneData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>

                        <Link href={item.link} to={item.path}>
                            <div className="GuestCardOneSection">
                                <div className="GuestCardOneImgCol" style={{width:props.width, height:props.height}}>
                                    <PersonIcon />
                                    <img className="GuestCardOneimg" src={item.img} alt="" />  
                                </div>
                                <div className="GuestCardOneTitle">{item.name}</div>
                                <div className="GuestCardOneDesignation textItalic">{item.Designation}</div>
                                <div className="GuestCardOneDesignation">{item.email}</div>
                                <div className="GuestCardOneDesignation">{item.phone}</div>
                            </div>
                        </Link>
                    </Grid>
                ))}

            </Grid>


        </div>

    );

}

export default UserAvatarOne;