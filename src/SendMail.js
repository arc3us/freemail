import { IconButton } from "@material-ui/core";
import { Close, Send } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import "./SendMail.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { updateDoc, serverTimestamp } from "firebase/firestore";


function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection('emails').add(
        {
            to: formData.to,
            subject: formData.subject,
            message: formData.subject,
            time: serverTimestamp()
        } 
    )

  dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close className="sendMail_close" 
            onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        <p>
          {errors.to && (
            <p className="sendMail_error">Recipient e-mail is requried</p>
          )}
        </p>
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />

        <p>
          {errors.subject && (
            <p className="sendMail_error">Subject is requried</p>
          )}
        </p>

        <input
          name="message"
          type="text"
          className="sendMail_message"
          {...register("message", { required: true })}
        />

        <p>
          {errors.message && (
            <p className="sendMail_error">Message is requried</p>
          )}
        </p>

        <div className="sendMail_options">
          <IconButton
            className="sendMail_send"
            type="submit"
            variant="contained"
          >
            <Send>Send</Send>
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
