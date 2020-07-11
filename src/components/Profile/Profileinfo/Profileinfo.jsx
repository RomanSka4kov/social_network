import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className="ProfileInfo">
            <div className={s.description_block}>
                <img src={profile.photos.large} alt=""/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div><p>{profile.fullName}</p></div>
                <div>{profile.aboutMe}</div>
                <div><a href={`https://${profile.contacts.facebook}`}>facebook</a></div>
                <div>looking for job: {profile.lookingForAJob ? "+" : "-"}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;