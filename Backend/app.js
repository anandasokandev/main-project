var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/guest/login');
var userregisterRouter = require('./routes/guest/userregister');
var fetchUsername = require('./routes/fetchUsername');
var fetchDepartment = require('./routes/fetchDepartment');
var createDepartment = require('./routes/createDepartment');
var createCourse = require('./routes/createCourse');
var fetchCourse = require('./routes/fetchCourse');
var fetchCourseById = require('./routes/fetchCourseById');
var createJobCategory = require('./routes/createJobCategory');
var createJob = require('./routes/createJob');
var fetchJobCategory = require('./routes/fetchJobCategory');
var fetchJobById = require('./routes/fetchJobById');
var fetchuser = require('./routes/fetchUser');
var createUserProfile = require('./routes/createUserProfile');
var fetchUserCategory = require('./routes/fetchUserCategory');
var usercategoryupdate = require('./routes/updateUserCategory');
var fetchDisabilityCategory = require('./routes/user/education/disability/fetchDisability');
var disabilitySubCategory = require('./routes/user/education/disability/fetchSubDisability');
var personalizedcourse = require('./routes/user/education/admission/personlisedcourse');
var fetchDisabilityByUser = require('./routes/user/education/disability/fetchDisabilityByUser');
var fetchCourseOnly = require('./routes/fetchCourseOnly');
var fetchCourseByCourseId = require('./routes/fetchCourseByCourseId');
var fetchDisabilityByName = require('./routes/user/education/disability/fetchDisabilityByName');
var submitAdmissionForm = require('./routes/user/education/admission/submitAdmissionForm');
var fetchadmission = require('./routes/user/education/admission/fetchAdmission');
var map = require('./routes/map');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/login',loginRouter);
app.use('/userregister',userregisterRouter);
app.use('/fetchusername',fetchUsername);
app.use('/fetchdepartment',fetchDepartment);
app.use('/createdepartment',createDepartment);
app.use('/createcourse',createCourse);
app.use('/fetchcourse',fetchCourse);
app.use('/fetchcoursebyid',fetchCourseById);
app.use('/createjobcategory',createJobCategory);
app.use('/createjob',createJob);
app.use('/fetchjobcategory',fetchJobCategory);
app.use('/fetchjob',fetchJobById);
app.use('/fetchuser',fetchuser);
app.use('/createuserprofile', createUserProfile);
app.use('/updateusercategory',usercategoryupdate);
app.use('/fetchusercategory', fetchUserCategory);
app.use('/fetchdisabilitycategory',fetchDisabilityCategory)
app.use('/fetchsubdisability',disabilitySubCategory);
app.use('/fetchpersonalizedcourse',personalizedcourse);
app.use('/fetchdisabilityuser',fetchDisabilityByUser);
app.use('/fetchcourseonly',fetchCourseOnly);
app.use('/fetchcoursebycid',fetchCourseByCourseId);
app.use('/fetchdisabilityname',fetchDisabilityByName);
app.use('/submitadmissionform',submitAdmissionForm);
app.use('/fetchadmission',fetchadmission);
app.use('/map',map);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
