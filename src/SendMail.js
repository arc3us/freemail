import { IconButton } from '@material-ui/core'
import { Close, Send } from '@material-ui/icons'
import React from 'react'
import "./SendMail.css"

function SendMail() {
  return (
    <div className='sendMail'>
        <div className="sendMail_header">
            <h3>New Message</h3>
            <Close className='sendMail_close' />
        </div>

        <form>
            <input placeholder="To" type="text" />
            <input placeholder='Subject' type="text" />
            <input type="text" className='sendMail_message' />
            <div className="sendMail_options">
                <IconButton className='sendMail_send'>
                    <Send>Send</Send>
                </IconButton>
            </div>
        </form>
    </div>
  )
}

export default SendMail