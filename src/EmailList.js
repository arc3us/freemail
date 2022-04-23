import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown, ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons'
import React from 'react'
import "./EmailList.css"
import Section from './Section'

function EmailList() {
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <IconButton>
                    <Checkbox />
                </IconButton>
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Redo />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>

            <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
        <div className="emailList_sections">
                <Section Icon={Inbox} title="Primary" color="red" selected={"true"}/>
                <Section Icon={People} title="Social" color="blue"  />
                <Section Icon={LocalOffer} title="Promotions" color="green"  />
            </div>
    </div>
  )
}

export default EmailList