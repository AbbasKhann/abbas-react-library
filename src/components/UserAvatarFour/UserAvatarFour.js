import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import "./UserAvatarFour.css"



function UserAvatarFour(props) {


    return (

        <div className="UserAvatarFour">

            <Link href={props.link} to={props.path}>
                <div className="GuestCardOneSection">
                    <div className="GuestCardOneImgCol">
                        <img className="GuestCardOneimg" src={props.img} alt="" />
                    </div>
                    <div className="GuestCardOneTitle">{props.Title}</div>
                    <div className="GuestCardOneDesignation">{props.Designation}</div>
                </div>
            </Link>

        </div>

    );

}

export default UserAvatarFour;