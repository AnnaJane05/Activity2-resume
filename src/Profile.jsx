import profilepic from './assets/Profile.jpg';

function Profile() {
    return (

        <div className="flex justify-center items-center">
        <div className='card'>
            <img src={profilepic} alt='picture'className="w-40 h-40 rounded-full " />
        </div>
        </div>
        
    );
}

export default Profile;