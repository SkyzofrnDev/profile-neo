import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../Config/emailjs.config";

export const sendEmail = async (data) => {
  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    data,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};
