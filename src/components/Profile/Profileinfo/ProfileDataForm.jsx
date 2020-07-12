import React from 'react';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import styles from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form className="ProfileDataForm" onSubmit={handleSubmit} >
            <div>
                <button>save</button>
            </div>
            { error && 
                <div className={style.formSummaryError}>
                    <span>{error}</span>
                </div>
            }
            <div>
                <b>Full name:</b> { createField("Full name", "fullName", Input, []) }
            </div>
            <div>
                <b>Looking for job:</b> { createField(null, "lookingForAJob", Input, [], {type: "checkbox"}) }
            </div>
            <div>
                <b>My professional skills:</b> { createField("My professional skills", "lookingForAJobDescription", Textarea, [],) }
            </div> 
            <div>
                <b>About me:</b> { createField("About me", "aboutMe", Textarea, [],) }
            </div>
            <div><b>Contacts: </b>{ Object.keys(profile.contacts).map(key => (
                <div className={styles.contact} key={key}>
                    <b>{key}:</b> { createField(key, "contacts." + key, Input, [],) }
                </div>
            )) }</div>
        </form>
    );
}

const ProfileDataFormReduxForm = reduxForm({form: "editProfile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;