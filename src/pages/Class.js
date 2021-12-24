import React,{useState} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import * as RiIcons from 'react-icons/ri';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Link } from 'react-router-dom';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import "../App.css"
const Class = () => {
    const mystyle={
        padding:"5px",
        margin:"1rem 3rem"
    }
    const classheading={
        display:"flex",
        width:"100%",
        height:"15%",
        fontSize:"1.15rem",
        justifyContent:"space-between",
        padding:"0.25rem"
    }
    const myiconsEdit={
        fontSize:"1.25rem",
        color:"blue"
    }
    const myiconsDelete={
        fontSize:"1.25rem",
        color:"red"
    }
    const icons={
        width:"75%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
    }
    const dialogTitle={
      backgroundColor:"blue",
      color:"white"
    }
    const [dialog, setdialog] = useState(false);
    const Isopen=()=>{
      setdialog(!dialog);
    }
       return(
         <>
           <div style={mystyle}>
               <div >
                   <span style={classheading}>
                       <span><b>Class Details</b></span>
                       <span style={{fontSize:"1.5rem",marginRight:"1rem"}} onClick={Isopen}><RiIcons.RiAddCircleFill/></span>
                   </span>
               </div>

               <MDBTable small hover>
      <MDBTableHead>
        <tr>
          <th>S.N.</th>
          <th>Class Name Nepali</th>
          <th>Short Name Nepali</th>
          <th>Class Name English</th>
          <th>Salary Scale</th>
          <th>Created by</th>
          <th>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
              <div style={icons}>
              <Link to="/" style={myiconsEdit}><RiIcons.RiEditCircleFill/></Link>
              <Link to="/" style={myiconsDelete}><RiIcons.RiDeleteBinFill/></Link>
              </div>
          </td>
        </tr>
        <tr>
            <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
              <div style={icons}>
              <Link to="/" style={myiconsEdit}><RiIcons.RiEditCircleFill/></Link>
              <Link to="/" style={myiconsDelete}><RiIcons.RiDeleteBinFill/></Link>
              </div>
          </td>
        </tr>
        <tr>
        <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
              <div style={icons}>
              <Link to="/" style={myiconsEdit}><RiIcons.RiEditCircleFill/></Link>
              <Link to="/" style={myiconsDelete}><RiIcons.RiDeleteBinFill/></Link>
              </div>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>  
    {/*ADD Dialog box */}
    <MDBContainer>
      {/* <MDBBtn color="primary" onClick={Isopen}>
        Modal
      </MDBBtn> */}
      <MDBModal isOpen={dialog} toggle={Isopen}>
        <MDBModalHeader style={dialogTitle} toggle={Isopen}>
          Add Class
        </MDBModalHeader>
        <MDBModalBody>
        <div class="l-form">
            {/* <form action="" className="form"> */}
            <div className='form'>
                
                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Class Name Nepali</label>
                </div>

                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Short Name Nepali</label>
                </div>
                <div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Class Name English</label>
                </div><div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Salary Scale</label>
                </div><div className="form__div">
                    <input type="text" className="form__input" placeholder=" "/>
                    <label for="" className="form__label">Created By</label>
                </div>

                {/* <input type="submit" className="form__button" value="Sign In"/> */}
            {/* </form> */}
            </div>
        </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn size='sm' color="secondary" onClick={Isopen}>
            Close
          </MDBBtn>
          <MDBBtn size='sm' color="primary">Submit</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    </>         
    );
}

export default Class
