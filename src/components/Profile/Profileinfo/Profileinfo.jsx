import React, { useState } from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return (
        <div className="ProfileData">
            {isOwner && <div><button onClick={goToEditMode}>edit profile</button></div>}
            <div><p><b>Full name: </b>{profile.fullName}</p></div>
            <div><p><b>Looking for job:</b> {profile.lookingForAJob ? "yes" : "no"}</p></div>
            { profile.lookingForAJob &&
            <div><p><b>My professional skills: </b> {profile.lookingForAJobDescription}</p></div> 
            }
            <div><p><b>About me: </b>{profile.aboutMe}</p></div>
            <div><b>Contacts: </b>{ Object.keys(profile.contacts).map(key => (
                <Contact contactName={key} contactValue={profile.contacts[key]} key={key} />
            )) }</div>
        </div>
    );
}

const Contact = ({ contactName, contactValue}) => {
    return (
        <div className={styles.contact}>
            <p><b>{contactName}:</b> {contactValue}</p>
        </div>
    );
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        savePhoto(e.target.files[0]);
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => { //fix later
            setEditMode(false);
        });
    }

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className="ProfileInfo">
            <div className={styles.description_block}>
                <img className={styles.avatar} src={profile.photos.large || userPhoto} alt="" />
                { isOwner && 
                    <input type="file" onChange={onMainPhotoSelected} />
                }
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
                }
            </div>
        </div>
    );
}

export default ProfileInfo;