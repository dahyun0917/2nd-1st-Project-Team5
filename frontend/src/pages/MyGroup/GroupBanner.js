import "./GroupBanner.css"
import MyGroup from "../../sevices/MyGroup";
import { useState, useEffect } from "react";
import pencil from '../../images/pencil.png'
import Backdrop from "../../components/reuseUI/Backdrop";
import MyGroupEdit from "../../components/modal/myGroupEdit/myGroupEdit";

const GroupBanner = () => {
    const [groupname, setGroupname] = useState("");
    const [groupimage, setGroupimage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    const [groupEditOpen, setGroupEditModalOpen] = useState(false);

    function NoGroupHandleClick(event){
        window.location.href="/Nogroup";
    }

    function GroupInfoHandleClick(event){
        window.location.href="/GroupInfo";
    }

    function GroupBoardHandleClick(event){
        window.location.href="/GroupBoard";
    }

    function GroupMemberHandleClick(event){
        window.location.href="/GroupMember";
    }

    const showGroupEditModal = () => {
        setGroupEditModalOpen(true);
    };
    const closeGroupEditModal = () => {
        setGroupEditModalOpen(false);
    }

    useEffect(() => {
        MyGroup().then((data) => {
            setGroupname(data.name);
            setGroupimage(data.image);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            <div className="groupbanner_body">
                <img src = {groupimage} alt="groupImage" className="group_img"/>
                <img src={pencil} alt="pencil" onClick={showGroupEditModal} className="correction"></img>
                <div className = "group_name">
                    {groupname}
                </div>

                {/*------------------------------------*/}

                {/* <div>
                    <button className = "groupbtn" onClick={NoGroupHandleClick}>그룹x</button>
                </div>  이부분은 그룹이 없을때만 나타나도록.*/}
                
                <div>
                    <button onClick={GroupInfoHandleClick} className="groupbtn">그룹정보</button>
                </div>
                
                <div>
                    <button onClick={GroupBoardHandleClick} className="groupbtn">그룹게시판</button>
                </div>
                
                <div>
                    <button onClick={GroupMemberHandleClick} className="groupbtn">그룹원목록</button>
                </div>

                <div>
                    <button onClick={NoGroupHandleClick} className="groupbtn">그룹없을때</button>
                </div>

            </div>
            {groupEditOpen && <MyGroupEdit setModalOpen={setGroupEditModalOpen}/>}
            {groupEditOpen && <Backdrop onCancel={closeGroupEditModal} />}
        </div>
    );
}

export default GroupBanner;
