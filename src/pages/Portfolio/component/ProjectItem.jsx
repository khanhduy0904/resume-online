import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';


function ProjectItem(props) {
    return (
        <div className="project col-12 col-sm-6 col-md-4 mb-3">
            <div className="project__img">
                <Link to={`/project/${props.slug}`}>
                    <img src={props.image} alt="" />
                    <div className="over-play"></div>
                    <div className="learn-more">
                        <EditIcon fontSize="small" className="project__img-icon" />
                    </div>
                </Link>

            </div>


            <div className="project__title mt-2"><p style={{fontWeight: 600, textAlign: "center", textTransform: "uppercase"}}>{props.title}</p></div>

        </div>
    );
}

export default ProjectItem;