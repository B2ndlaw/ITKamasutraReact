import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={s.content}>
    <div>
    <img src="https://celes.club/uploads/posts/2022-05/1653976720_21-celes-club-p-matritsa-oboi-krasivie-25.jpg"/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>

}

export default Profile;