import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        savePhoto(e.target.files[0]);
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
                <div><p>{profile.fullName}</p></div>
                <div>{profile.aboutMe}</div>
                <div><a href={`https://${profile.contacts.facebook}`}>facebook</a></div>
                <div>looking for job: {profile.lookingForAJob ? "+" : "-"}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;