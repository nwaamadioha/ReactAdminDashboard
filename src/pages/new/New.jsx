import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined"

const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>
                  <DriveFolderUploadOutlined />
                </label>
                <input type="file"/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="nwa_mmadu"/>
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="nwa_mmadu"/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="nwa_mmadu@gmail.com"/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="email" placeholder="+44 7771 006741"/>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="email" placeholder="6 Suffolk Street, Hull"/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="email" placeholder="+44 7771 UK"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New