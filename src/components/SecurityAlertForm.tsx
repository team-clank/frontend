import { FunctionComponent } from "react";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./SecurityAlertForm.module.css";

const SecurityAlertForm: FunctionComponent = () => {
  return (
    <div className={styles.contentscontainer}>
      <div className={styles.textcontainer}>
        <b className={styles.title}>
          <p className={styles.subscribe}>Subscribe</p>
          <p className={styles.theSecurityAlert}>the security alert</p>
        </b>
        <div className={styles.text}>
          <p className={styles.subscribe}>
            <span className={styles.weWillInform}>{`We will inform `}</span>
            <span
              className={styles.emailgmailcom}
            >{`{{email@gmail.com}}`}</span>
            <span> not only</span>
          </p>
          <p className={styles.theSecurityAlert}>
            <span>the security alert but also the news from Clank.</span>
          </p>
        </div>
      </div>
      <div className={styles.checkboxcontainer}>
        <FormControlLabel
          className={styles.checkbox}
          label=""
          labelPlacement="end"
          control={<Checkbox color="primary" defaultChecked size="medium" />}
        />
        <div className={styles.text1}>
          I have read and understand the privacy and cookies policy and agree to
          receive personalized communications from Clank by Email
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button variant="outlined" color="primary">
          Let me know
        </Button>
        <Link className={styles.btnText} to="/loading">
          <div className={styles.btnnamet}>Later</div>
        </Link>
      </div>
    </div>
  );
};

export default SecurityAlertForm;
