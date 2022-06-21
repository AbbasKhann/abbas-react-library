import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./UserAvatarFive.css"



function UserAvatarFive(props) {

    const { guestCardOneData } = props;

    return (

        <div className="UserAvatarFive">


            <Grid container spacing={props.spacing}>

                {guestCardOneData.map((item, i) => (
                    <Grid item md={props.col} xs={12}>

                        <Link href={item.link} to={item.path}>
                            <div className="GuestCardOneSection">
                                <div className="GuestCardOneImgCol">
                                    <img className="GuestCardOneimg" src={item.img} alt="" />
                                </div>
                                <div className="GuestCardOneTitle">{item.name}</div>
                                <div className="GuestCardOneDesignation">{item.Designation}</div>
                            </div>
                        </Link>
                    </Grid>
                ))}

            </Grid>


        </div>

    );

}

export default UserAvatarFive;