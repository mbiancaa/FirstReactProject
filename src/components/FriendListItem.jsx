const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <li>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? 'Online' : 'Offline'}</p>
        </li>

    );
}

export default FriendListItem;