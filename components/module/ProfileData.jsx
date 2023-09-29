import Link from "next/link";

function ProfileData({ data }) {
    return (
      <div className="profile-data">
        <div>
          <span>Name: </span>
          <p>{data.name}</p>
        </div>
        <div>
          <span>Last Name: </span>
          <p>{data.lastName}</p>
        </div>
        <div>
          <span>Email: </span>
          <p>{data.email}</p>
        </div>
        <div style={{marginTop:'30px'}}>
          <Link href={`/edit-profile/${data.email}`}>
          <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default ProfileData;