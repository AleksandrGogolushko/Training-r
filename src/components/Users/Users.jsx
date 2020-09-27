import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./User.module.css"
import avatarDefault from "../../assets/images/iconfinder_unknown_403017.svg"
// import * as axios from "axios"
import { followUnfollowAPI } from "../../api/api"


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let page = 1; page <= pagesCount; page++) {
        pages.push(page)
    }
    return (
        <div className={style.userWrappers}>
            <div className={style.navigation}>
                <p onClick={() => {
                    let n = props.currentPage;
                    if (n !== 1) {
                        props.changePage(n -= 1)
                    }
                }
                }>-</p>
                {pages.map(e => e <= 5 ? <p key={e} onClick={() => props.changePage(e)} className={props.currentPage === e ? style.selected : ""}>{e}</p> : ""
                )}
                <p onClick={
                    () => {
                        let n = props.currentPage;
                        props.changePage(n += 1)
                    }
                }>+</p>
            </div>
            {props.usersProfile.map(u =>
                <div key={u.id} className={style.userSection}>
                    <div className={style.avatarFollowSection}>
                        <div className={style.avatar}>
                            <NavLink to={`/Profile/${u.id}`}>
                                <img src={u.photos.small ? u.photos.small : avatarDefault} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.add} onClick={() => {
                                    props.unfollowThunk(u.id)
                                }}>
                                    Unfollow
                                     </button> :
                                <button disabled={props.followingInProgress.some(id => id === u.id)} className={style.add} onClick={() => {
                                    props.followThunk(u.id)
                                }}>
                                    Follow
                                    </button>
                            }
                        </div>
                    </div>
                    <div className={style.discriptionUser}>
                        <div className={style.nameStatus}>
                            <p>{u.name}</p>
                            <p>Status: {u.status ? u.status : "----"}</p>
                        </div>
                        <div className={style.location}>
                            <p>Country: {u.location ? u.location.country : "----"}</p>
                            <p>City: {u.location ? u.location.city : "----"}</p>
                        </div>
                    </div>
                </div>)
            }
            <button className={style.more}>Show more</button>
        </div>
    )
}


export default Users