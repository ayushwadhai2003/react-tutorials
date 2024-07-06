
import styles from '../../Styles/OnePost.module.css'
import { BsThreeDots } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { TbSend } from 'react-icons/tb'

function OnePost(props) {

    const { postImage, userHandleId, postTimestamp, postLocation, userAvatar, likesCount,
        postCaption, commentCount } = props


    return (
        < div className={styles.OnePost}>

            {/* top */}
            <div className={styles.top}>
                {/* avatar */}
                <img
                    src={userAvatar}
                    alt={userAvatar}
                />

                <div className={styles.info}>
                    {/* userhandaleid && verified icon && time  */}
                    <h3>
                        {userHandleId}
                        <MdVerified style={{
                            marginLeft: '5px',
                            color: '#1DA1F2',
                        }} />

                        <span style={{
                            margin: '0 5px',
                        }}>&middot;</span>

                        <span style={{
                            color: 'gray',
                        }}>{postTimestamp}</span>
                    </h3>
                    {/* addrress/location  */}
                    <p>{postLocation}</p>
                </div>

                {/* three dots icon  */}
                <BsThreeDots style={{
                    fontSize: '20px',
                    padding: '8px',
                }} />

            </div>

            {/* mid */}
            <div className={styles.mid}>
                <img src={postImage}
                    alt={postImage}
                />
                <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                        <FaRegHeart style={{ fontSize: '25px' }} />
                        <FiMessageCircle style={{ fontSize: '25px', marginLeft: '10px' }} />
                        <TbSend style={{ fontSize: '25px', marginLeft: '10px' }} />
                    </div>

                    <FaRegBookmark style={{ fontSize: '25px' }} />
                </div>
                {
                    likesCount > 0 ? (
                        <p>{likesCount} Like</p>
                    ) : (
                        <p>no like yet</p>
                    )
                }
            </div>

            {/* bottom */}
            <div className={styles.bottom}>
                {
                    postCaption && (
                        <h3><span style={{ fontWeight: 'bold', marginRight: '5px' }} >{userHandleId}</span ><span>{postCaption}</span></h3>
                    )
                }
                {
                    commentCount > 0 ? (

                        <h2>Viwe all {commentCount} comment</h2>
                    ) : (
                        <h2>No Comment yet</h2>
                    )
                }
                <input type="text" placeholder='Add a comment' />
            </div>
        </div >
    )
}

export default OnePost