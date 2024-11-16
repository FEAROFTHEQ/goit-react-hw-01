import s from"./Profile.module.css"

 function Profile({name, tag, location, image, stats}){
  return (
    <div className={s.container}>
  <div className={s.info}>
    <img className={s.image}
      src={image}
      alt="User avatar"
    />
    <p className={s.name}>{name}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.list}>
    <li className={s.item}>
      <span className={s.title}>Followers</span>
      <span className={s.number}>{stats.followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.title}>Views</span>
      <span className={s.number}>{stats.views}</span>
    </li>
    <li className={s.item}>
      <span className={s.title}>Likes</span>
      <span className={s.number}>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

export default Profile;