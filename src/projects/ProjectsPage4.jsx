const user = {
    name: "Santiago Vallejo",
    imageUrl: 'https://res.cloudinary.com/drqycaptj/image/upload/v1700345057/hbcedhngtbfmj1hpjsvh.jpg',
    imageSize:  90
}

export default function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img 
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        
        </>
    )

}
