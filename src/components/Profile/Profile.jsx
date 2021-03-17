import { Typography } from "@material-ui/core";
import React from "react";
import "./style.scss";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import CusTomTimeline from "../Timeline/Timeline";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineItem from "@material-ui/lab/TimelineItem";
import CustomButton from "../Button/Button";
import GetAppIcon from '@material-ui/icons/GetApp';
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className={"timeline_content"}>
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}{" "}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile(props) {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src="/img/myImage.png" alt="sad" style={{objectFit: "cover"}}/>
      </figure>

      <div className="profile_information">
        <CustomTimeline
          icon={<PermIdentityOutlinedIcon />}
          title={""}
        >
            <CustomTimelineItem title="Name" text={resumeData.name}/>
            <CustomTimelineItem title="Title" text={resumeData.title}/>
            <CustomTimelineItem title="Email" text={resumeData.email}/>
            {Object.keys(resumeData.socials).map((key, index) => (
                 <CustomTimelineItem key={index} title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
            ))}
        </CustomTimeline>
        <div className="btn-container"><CustomButton text="Download CV" icon={<GetAppIcon />} /></div>
        
      </div>
    </div>
  );
}

export default Profile;
