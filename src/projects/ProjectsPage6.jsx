const user = {
    name: "Camilo Cuellar",
    imageUrl: 'https://res.cloudinary.com/drqycaptj/image/upload/v1700345057/ghzzrck1zjzlkflsnl5e.jpg',
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
