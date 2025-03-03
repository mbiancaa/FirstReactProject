import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {

    return (
        <ul>

            {friends.map((friend) => {
                return <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            })}

        </ul>

    );
}

export default FriendList;