// import { Grid, Typography } from '@material-ui/core';
// import React from 'react';
// import myImage from "../../assets/img/cfd.png";
// import "./style.scss";
// import CustomButton from "../../components/Button/Button";
// import { useRouteMatch } from 'react-router';
// import resumeData from "../../utils/resumeData";
// function ProjectDetail(props) {

//     let routeMath= useRouteMatch();
//     let dataShoper = resumeData.projects[0];
//     let dataCFD = resumeData.projects[1];
//     let dataResume = resumeData.projects[2];
//     // console.log(data);
//     console.log(routeMath.params.slug);
//     if(routeMath.params.slug === "shoper"){
//         return (

//             <div className="project">
//                 <div>
//                     <div className="project-image">
//                         <img src={dataShoper.image} alt="abc" />
//                     </div>
//                 </div>
//                 <div className="project-demo" >
//                     <CustomButton text={"View Demo"} link={true} />
//                 </div>
//                 <Grid container className="section pb-45 top_30">
//                     <Grid item className="section_title mb_30">
//                         <span className="theme_span"></span>
//                         <Typography variant="h6" className="section_title-text">Project Information</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectInfo.name}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectInfo.library}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}><a href={dataShoper.projectInfo.link} target="_blank">adssdsads</a></p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Project Member</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectInfo.member}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Project Position</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectInfo.position}</p>
//                         </div>
//                     </Grid>

//                 </Grid>
//                 <Grid container className="section pb-45 top_30">
//                     <Grid item className="section_title mb_30">
//                         <span className="theme_span"></span>
//                         <Typography variant="h6" className="section_title-text">Project Functions</Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Login, Logout, Regiser</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.auth}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Cart</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.cart}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Search</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.search}</p>
//                         </div>
//                         <div className="row mt-2">
//                             <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
//                             <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
//                         </div>
    
//                     </Grid>
    
    
//                 </Grid>
//                 {/* <Grid container className="section pb-45 top_30">
//                     <Grid item className="section_title mb_30">
//                         <span className="theme_span"></span>
//                         <Typography variant="h6" className="section_title-text">Comment</Typography>
//                     </Grid>
//                     <Grid item item xs={12}>
//                         <div className="row project-comment">
//                             <StarRating />
//                             <input type="text" placeholder="name" name="abc" className="col-sm-12 mt-3 mb-2 abc"></input>
//                             <input type="text" placeholder="comment" name="abc" className="col-sm-12 mt-3 mb-2 abc"></input>
//                         </div>
//                     </Grid>
//                 </Grid> */}
//             </div>
//         );
//     }else if(routeMath.params.slug === "cfd"){
//         return (
//             <div className="project">
//             <div>
//                 <div className="project-image">
//                     <img src={dataCFD.image} alt="abc" />
//                 </div>
//             </div>
//             <div className="project-demo" >
//                 <CustomButton text={"View Demo"} link={true} />
//             </div>
//             <Grid container className="section pb-45 top_30">
//                 <Grid item className="section_title mb_30">
//                     <span className="theme_span"></span>
//                     <Typography variant="h6" className="section_title-text">Project Information</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.name}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.library}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}><a href={dataCFD.projectInfo.link} target="_blank">adssdsads</a></p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Member</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.member}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Position</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.position}</p>
//                     </div>
//                 </Grid>

//             </Grid>
//             <Grid container className="section pb-45 top_30">
//                 <Grid item className="section_title mb_30">
//                     <span className="theme_span"></span>
//                     <Typography variant="h6" className="section_title-text">Project Functions</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Login, Logout, Regiser</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.auth}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Cart</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.cart}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Search</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataShoper.projectFunc.search}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
//                     </div>

//                 </Grid>


//             </Grid>
          
//         </div>
//         )
//     }

//     return (
       
//         <div className="project">
//             <div>
//                 <div className="project-image">
//                     <img src={dataResume.image} alt="abc" />
//                 </div>
//             </div>
//             <div className="project-demo" >
//                 <CustomButton text={"View Demo"} link={true} />
//             </div>
//             <Grid container className="section pb-45 top_30">
//                 <Grid item className="section_title mb_30">
//                     <span className="theme_span"></span>
//                     <Typography variant="h6" className="section_title-text">Project Information</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>{dataResume.projectInfo.name}</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>React</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}><a href="#">adssdsads</a></p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Member</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>1</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Project Position</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Front End Developer</p>
//                     </div>


//                 </Grid>


//             </Grid>
//             <Grid container className="section pb-45 top_30">
//                 <Grid item className="section_title mb_30">
//                     <span className="theme_span"></span>
//                     <Typography variant="h6" className="section_title-text">Project Functions</Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Contact, Comment</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Validate form when you click submit button, create comment and star rating</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>CV Offline</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Download my offline CV</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
//                     </div>
//                     <div className="row mt-2">
//                         <strong className="col-3" style={{ textAlign: "right" }}>Change themes</strong>
//                         <p className="col-9" style={{ wordBreak: "break-word" }}>Using Custom directive and CSS variable to change themes</p>
//                     </div>

//                 </Grid>


//             </Grid>
            
//         </div>
//     );
// }

// export default ProjectDetail;


//////////////////////////
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import myImage from "../../assets/img/cfd.png";
import "./style.scss";
import CustomButton from "../../components/Button/Button";
import { useRouteMatch } from 'react-router';
import resumeData from "../../utils/resumeData";
function ProjectDetail(props) {

    let routeMath= useRouteMatch();
    // let dataShoper = resumeData.projects[0];
    let dataCFD = resumeData.projects[0];
    let dataResume = resumeData.projects[1];
    // console.log(data);
    console.log(routeMath.params.slug);
    if(routeMath.params.slug === "cfd"){
        return (
            <div className="project">
            <div>
                <div className="project-image">
                    <img src={dataCFD.image} alt="abc" />
                </div>
            </div>
            <div className="project-demo" >
                <CustomButton text={"View Demo"} link={true} />
            </div>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.name}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.library}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href={dataCFD.projectInfo.link} target="_blank">adssdsads</a></p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Member</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.member}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Position</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.position}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Technology</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectInfo.technology}</p>
                    </div>
                </Grid>

            </Grid>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Functions</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Login, Logout, Regiser</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectFunc.auth}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Register Course</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectFunc.courseRegister}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Change User Information</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataCFD.projectFunc.changeInfo}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
                    </div>

                </Grid>


            </Grid>
          
        </div>
        )
    }

    return (
       
        <div className="project">
            <div>
                <div className="project-image">
                    <img src={dataResume.image} alt="abc" />
                </div>
            </div>
            <div className="project-demo" >
                <CustomButton text={"View Demo"} link={true} />
            </div>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Information</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Name</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataResume.projectInfo.name}</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Library</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>React</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Link</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}><a href="https://resume-online-three.vercel.app/">https://resume-online-three.vercel.app/</a></p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Member</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>1</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Project Position</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Front End Developer</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Technology</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>{dataResume.projectInfo.technology}</p>
                    </div>


                </Grid>


            </Grid>
            <Grid container className="section pb-45 top_30">
                <Grid item className="section_title mb_30">
                    <span className="theme_span"></span>
                    <Typography variant="h6" className="section_title-text">Project Functions</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Contact, Comment</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Validate form when you click submit button, create comment and star rating</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>CV Offline</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Download my offline CV</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Responsive</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Responsive is suitable for all screen types</p>
                    </div>
                    <div className="row mt-2">
                        <strong className="col-3" style={{ textAlign: "right" }}>Change themes</strong>
                        <p className="col-9" style={{ wordBreak: "break-word" }}>Using Custom directive and CSS variable to change themes</p>
                    </div>

                </Grid>


            </Grid>
            
        </div>
    );
}

export default ProjectDetail;