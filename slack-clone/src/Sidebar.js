import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import SidebarOption from "./SidebarOption"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"

function Sidebar()
{
    return(
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>PenLabs</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Chirag Saxena
                    </h3>
                </div>
                    <CreateIcon />
                </div>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test"}/>
                    <SidebarOption  title={"Test1"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test2"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test3"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test4"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test5"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test6"}/>
                    <SidebarOption Icon={InsertCommentIcon} title={"Test7"}/>
                    <SidebarOption Icon={ExpandLessIcon} title={"Show Less"}/>
                    <hr />
                    <SidebarOption Icon={ExpandMoreIcon} title={"Channels"}/>
                    <SidebarOption Icon={ExpandLessIcon} title={"Show Less"}/>
                    <hr />
                    <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channel"}/>

        </div>
    )
}

export default Sidebar 