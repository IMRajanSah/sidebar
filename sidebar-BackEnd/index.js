const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pis",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/readclass',(req,res)=>{
    const sqlRead="select * from class;"
    db.query(sqlRead,(err,result)=>{
        if(err)
            console.log(err);
        res.send(result);
        
    });
});


// app.post('/insert', (req, res) => {
//      //const sqlInsert="INSERT INTO dashboard(ID,employee_type_id,class_id,post_id,sewa_id,  samhu_id,  appointment_date,  sanket_no,emp_name,  gender,district_id,  province,GapaNapa_id,  ward_no,  tole,  mobile_no,email,  dob,  blood_group,grand_father_name,  father_name,  mother_name, husband_wife_name,  citizenship_no,  issue_date,issue_district,sanchay_kosh_no,bima_no,na_la_kosh_no,pan_no,user_id,user_status) VALUES(DEFAULT,981,781,509,907,980,'2020-10-12',879,'suman', 'male',24,2,142,14,'subidhanagarnagar',9876513254,'suman@gmail.com','2001-2-14','B+','Ram Gopal','Ram pukar','maya devi','susila','17-01-65109','2015-06-19','dhanusha',125467,76503,23564,76589,'suman@14','active');";
//      const sqlInsert="INSERT INTO dashboard(ID,employee_type_id,class_id,post_id,sewa_id,  samhu_id,  appointment_date,  sanket_no,emp_name,  gender,district_id,  province,GapaNapa_id,  ward_no,  tole,  mobile_no,email,  dob,  blood_group,grand_father_name,  father_name,  mother_name, husband_wife_name, citizenship_no,  issue_date,issue_district,sanchay_kosh_no,bima_no,na_la_kosh_no,pan_no,user_id,user_status) VALUES(DEFAULT,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
     
//      db.query(sqlInsert,[req.body.employee_type_id,req.body.class_id,req.body.post_id,req.body.sewa_id,req.body.samhu_id,req.body.appointment_date,req.body.sanket_no,req.body.emp_name,req.body.gender,req.body.district_id,req.body.province,req.body.GapaNapa_id,req.body.ward_no,req.body.tole,req.body.mobile_no,req.body.email,req.body.dob,req.body.blood_group,req.body.grand_father_name,req.body.father_name,req.body.mother_name,req.body.husband_wife_name,req.body.citizenship_no,req.body.issue_date,req.body.issue_district,req.body.sanchay_kosh_no,req.body.bima_no,req.body.na_la_kosh_no,req.body.pan_no,req.body.user_id,req.body.user_status],(err,res)=>{
//          if(err)
//         {
//             console.log(err);
//         }
//      });
//     //console.log(req.body);
    
// });
app.listen(3001, () => {
    console.log('Running on port 3001');
})