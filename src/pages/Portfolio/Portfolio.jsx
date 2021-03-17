import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import "./style.scss";
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import ProjectItem from "./component/ProjectItem";
import resumeData from "../../utils/resumeData";

function Portfolio(props) {
    const match = useRouteMatch();

    return (
        <Grid container className="section pb-45">
            <Grid item className="section_title mb_30">
                <span className="theme_span"></span>
                <Typography variant="h6" className="section_title-text">My Projects</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {/* <div className="project col-12 col-sm-6 col-md-4 ">
                        <div className="project__img">
                            <Link to="/CFD-project">
                                <img src="https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
                                <div className="over-play"></div>
                                <div className="learn-more">
                                    <EditIcon fontSize="small" className="project__img-icon" />
                                </div>
                            </Link>

                        </div>


                        <div className="project__title">CFD Training</div>

                    </div> */}
                    {
                        resumeData.projects.map((item, index) => {
                            return (
                                <ProjectItem  key={index} {...item}/>
                            )
                        })
                    }
                    {/* <ProjectItem /> */}

                    
            
                </Grid>
            </Grid>


        </Grid>
    );
}

export default Portfolio;