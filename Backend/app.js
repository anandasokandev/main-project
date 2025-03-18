var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
global.__basedir = path.resolve(path.dirname(''));

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/guest/login');
var userregisterRouter = require('./routes/guest/userregister');
var fetchUsername = require('./routes/fetchUsername');
var fetchDepartment = require('./routes/fetchDepartment');
var createDepartment = require('./routes/createDepartment');
var createCourse = require('./routes/admin/createCourse');
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
var fetchAdmissionDetails = require('./routes/admin/admission/fetchAdmissionDetails');
var fetchAdmissionOnly = require('./routes/admin/admission/fetchAdmissionOnly');
var fetchSpecificAdmission = require('./routes/admin/admission/fetchSpecificAdmission');
var admitStudent = require('./routes/admin/admission/admitStudent');
var fetchStudentByCourse = require('./routes/admin/admission/fetchStudentDetailsByCourse');
var fetchDepartmentById = require('./routes/fetchDepartmentById');
var updateDepartment = require('./routes/updateDepartment');
var deleteDepartment = require('./routes/deleteDepartment');
var upload = require('./routes/upload');
const { glob } = require('fs');
var createProfile = require('./routes/user/matrimony/createProfile');
var profileExists = require('./routes/user/matrimony/fetchMatrimonyProfileExists');
var uploadImages = require('./routes/user/matrimony/uploadImages');
var fetchMatrimonyProfile = require('./routes/admin/matrimony/fetchMatrimonyProfile');
var findPartner = require('./routes/user/matrimony/findMatchingPartner');
var fetchMatrimonyById = require('./routes/admin/matrimony/fetchMatrimonyById');
var fetchImages = require('./routes/admin/matrimony/fetchImages');
var createFamilyDetails = require('./routes/user/matrimony/createFamilyDetails');
var fetchFamilyDetails = require('./routes/user/matrimony/fetchFamilyDetails');
var createBio = require('./routes/user/matrimony/createbio');
var fetchBio = require('./routes/user/matrimony/FetchBio');
var fetchPreference = require('./routes/user/matrimony/fetchPreference');
var createPreference = require('./routes/user/matrimony/createPreference');
var sendInterest = require('./routes/user/matrimony/sendInterest');
var fetchInterest = require('./routes/user/matrimony/fetchInterest');
var fetchInterestByUser = require('./routes/user/matrimony/fetchInterestByUser');
var fetchUserByInterest = require('./routes/user/matrimony/fetchUserByInterest');
var deleteInterest = require('./routes/user/matrimony/deleteInterest');
var editMatrimonyProfile = require('./routes/user/matrimony/editMatrimonyProfile');
var fetchReceivedInterest = require('./routes/user/matrimony/fetchReceivedInterestByUser');
var fetchMutualInterest = require('./routes/user/matrimony/fetchMutualInterest');
var updateJobCategory = require('./routes/admin/career/updateJobCategory');
var fetchJobCategoryById = require('./routes/admin/career/fetchJobCategoryById');
var deleteJobCategory = require('./routes/admin/career/deleteJobCategory');
var deleteCourse = require('./routes/admin/education/deleteCourse');
var editCourse = require('./routes/admin/education/editCourse');
var fetchJobByJobId = require('./routes/admin/career/fetchJobByJobId');
var updateJob = require('./routes/admin/career/editJob');
var deleteJob = require('./routes/admin/career/deleteJob');
var disablematrimonyprofile = require('./routes/admin/matrimony/disableMatrimonyProfile');
var matrimonyDisable = require('./routes/admin/matrimony/matrimonyDisable');
var fetchUserByInterestPending = require('./routes/user/matrimony/fetchUserByInterestPending');
var fetchUserByInterestAccepted = require('./routes/user/matrimony/fetchUserByInterestAccepted');
var fetchUserByInterestDeclined = require('./routes/user/matrimony/fetchUserByInterestDeclined');
var fetchSendInterestAll = require('./routes/user/matrimony/fetchSendInterestAll');
var fetchSendInterestPending = require('./routes/user/matrimony/fetchSendInterestPending');
var fetchSendInterestAccepted = require('./routes/user/matrimony/fetchSendInterestAccepted');
var fetchSendInterestDeclined = require('./routes/user/matrimony/fetchSendInterestDeclined');
var acceptInterest = require('./routes/user/matrimony/updateInterestToAccept');
var declineInterest = require('./routes/user/matrimony/updateInterestToDeclined');
var fetchAcceptedInterest = require('./routes/admin/matrimony/fetchAcceptedInterest');
var fetchDeclinedInterest = require('./routes/admin/matrimony/fetchDeclinedInterest');
var fetchPendingInterest = require('./routes/admin/matrimony/fetchPendingInterest');
var setJobConstraints = require('./routes/admin/career/setJobConstraints');
var findMatchingJob = require('./routes/user/career/findMatchingJob');
var submitjobform = require('./routes/user/career/submitJobApplication');
var fetchSubmittedJob = require('./routes/user/career/fetchSubmittedJob');
var fetchSubmittedAnyJob = require('./routes/user/career/fetchSubmittedAnyJob');
var fetchJobStatus = require('./routes/user/career/fetchJobStatus');
var updateDisability = require('./routes/user/career/updateDisabilitydetails');
var deleteJobForm = require('./routes/user/career/deleteJobForm');
var fetchAdmissionStatus = require('./routes/user/education/admission/fetchAdmissionStatus');
var deleteAdmissionForm = require('./routes/user/education/admission/deleteAdmissionForm');
var fetchUserProfile = require('./routes/admin/matrimony/fetchUserProfile');
var fetchCareerUsers = require('./routes/admin/career/fetchCareerUsers');
var disableUser = require('./routes/admin/career/disableUser');
var enableUser = require('./routes/admin/career/enableUser');
var fetchUserSpecificJobStatus = require('./routes/admin/career/fetchUserSpecificJobStatus')
var fetchMatrimonyReport = require('./routes/admin/matrimony/Reports/fetchMatrimonyProfile');

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
app.use('/fetchadmissiondetails',fetchAdmissionDetails)
app.use('/fetchadmissiononly',fetchAdmissionOnly);
app.use('/fetchspecificadmission',fetchSpecificAdmission);
app.use('/admitstudent',admitStudent);
app.use('/fetchstudentbycourse',fetchStudentByCourse);
app.use('/fetchdeptbyid',fetchDepartmentById);
app.use('/updatedept',updateDepartment);
app.use('/deletedept',deleteDepartment);
app.use('/upload',upload);
app.use('/createprofile',createProfile);
app.use('/fetchmatrimonyprofile',profileExists);
app.use('/uploads',uploadImages);
app.use('/fetchmatrimonyprofileall',fetchMatrimonyProfile)
app.use('/findpartner',findPartner);
app.use('/fetchmatrimonybyid',fetchMatrimonyById);
app.use('/fetchimages',fetchImages)
app.use('/createfamilydetails',createFamilyDetails)
app.use('/fetchfamilydetails',fetchFamilyDetails)
app.use('/createbiodetails',createBio);
app.use('/fetchbiodetails',fetchBio);
app.use('/fetchpreference',fetchPreference);
app.use('/createpreference',createPreference);
app.use('/sendinterest',sendInterest);
app.use('/fetchinterest',fetchInterest);
app.use('/fetchinterestbyuser',fetchInterestByUser)
app.use('/fetchuserbyinterest',fetchUserByInterest);
app.use('/deleteinterest',deleteInterest);
app.use('/editmatrimonyprofile',editMatrimonyProfile);
app.use('/fetchreceivedinterest',fetchReceivedInterest);
app.use('/fetchmutualinterest',fetchMutualInterest);
app.use('/updatejobcategory',updateJobCategory)
app.use('/fetchjobcategorybyid',fetchJobCategoryById);
app.use('/deletejobcategory',deleteJobCategory);
app.use('/deletecourse',deleteCourse);
app.use('/editcourse',editCourse);
app.use('/fetchjobbyjobid',fetchJobByJobId);
app.use('/updatejob',updateJob);
app.use('/deletejob',deleteJob);
app.use('/disablematrimony',disablematrimonyprofile);
app.use('/matrimonydisable',matrimonyDisable)
app.use('/fetchreceivedpendinginterest',fetchUserByInterestPending);
app.use('/fetchreceivedacceptedinterest',fetchUserByInterestAccepted);
app.use('/fetchreceiveddeclinedinterest',fetchUserByInterestDeclined);
app.use('/fetchsendinterestall',fetchSendInterestAll);
app.use('/fetchsendinterestpending',fetchSendInterestPending);
app.use('/fetchsendinterestaccepted',fetchSendInterestAccepted);
app.use('/fetchsendinterestdeclined',fetchSendInterestDeclined);
app.use('/declineinterest',declineInterest),
app.use('/acceptinterest',acceptInterest);
app.use('/fetchpendinginterest',fetchPendingInterest);
app.use('/fetchacceptedinterest',fetchAcceptedInterest)
app.use('/fetchdeclinedinterest',fetchDeclinedInterest);
app.use('/setjobconstraints',setJobConstraints); 
app.use('/findmatchingjob',findMatchingJob);
app.use('/submitjobform',submitjobform);
app.use('/fetchsubmittedjob',fetchSubmittedJob);
app.use('/fetchsubmittedanyjob',fetchSubmittedAnyJob);
app.use('/fetchjobstatus',fetchJobStatus);
app.use('/updatedisability',updateDisability);
app.use('/deletejobform',deleteJobForm);
app.use('/fetchadmissionstatus',fetchAdmissionStatus);
app.use('/deleteadmissionform',deleteAdmissionForm);
app.use('/fetchuserprofile',fetchUserProfile);
app.use('/fetchcareerusers',fetchCareerUsers);
app.use('/disableuser',disableUser);
app.use('/enableuser',enableUser);
app.use('/fetchspecificjobstatus',fetchUserSpecificJobStatus);
app.use('/fetchmatrimonyreport',fetchMatrimonyReport);

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
