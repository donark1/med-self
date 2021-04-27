import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Createprofile from './pages/createprofile';
import Bodyparts from './pages/bodyparts';
import Aboutus from './pages/aboutus';
import Login from './pages/login';
import Logout from './pages/logout';
import Navbar from './components/navbar';
import Headneck from './pages/bodyparts/headneck';
import Chest from './pages/bodyparts/chest';
import Abdomen from './pages/bodyparts/abdomen';
import Legsfeet from './pages/bodyparts/legsfeet';
import ShouldersArmsHands from './pages/bodyparts/shouldersarmshands';
import ChestDiagnosis from './pages/diagnosis/chestdiagnosis';
import ShouldersArmsHandsDiagnosis from './pages/diagnosis/shouldersarmshandsdiagnosis';
import AbdomenDiagnosis from './pages/diagnosis/abdomendiagnosis';
import HeadNeckDiagnosis from './pages/diagnosis/headneckdiagnosis';
import LegsFeetDiagnosis from './pages/diagnosis/legsfeetdiagnosis';
import ChestTreatments from './pages/treatments/chesttreatments';
import ShouldersArmsHandsTreatments from './pages/treatments/shouldersarmshandstreatments';
import AbdomenTreatments from './pages/treatments/abdomentreatments';
import HeadNeckTreatments from './pages/treatments/headnecktreatments';
import LegsFeetTreatments from './pages/treatments/legsfeettreatments';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      signInRedirect: false,
      signOutRedirect: false,
      bodypart: null,
      isLoggedIn: false
    };
    this.createProfile = this.createProfile.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.renderBodypart = this.renderBodypart.bind(this);
  }

  createProfile(newUser) {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(newUser => {
        const emailStringify = JSON.stringify(email.value);
        const passwordStringify = JSON.stringify(password.value);
        window.localStorage.setItem("email", emailStringify);
        window.localStorage.setItem("password", passwordStringify);
        this.setState({
          users: newUser,
          isLoggedIn: true,
          profileRedirect: 'bodyparts'
        });
      })
      .catch(error => console.error(error));
  }

  login(loginUser) {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(loginUser => {
        const emailStringify = JSON.stringify(email.value);
        const passwordStringify = JSON.stringify(password.value);
        window.localStorage.setItem("email", emailStringify);
        window.localStorage.setItem("password", passwordStringify);
        this.setState({
          users: loginUser,
          isLoggedIn: true,
          signInRedirect: 'bodyparts'
        });
      })
      .catch(error => console.error(error));
  }

  logout() {
    this.setState({
      users: null,
      isLoggedIn: false,
      signInRedirect: false });
    window.localStorage.clear();
  }

  renderBodypart(bodypart) {
    fetch('/api/bodypart', {
      method: 'POST',
      body: JSON.stringify(bodypart),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) { throw res; }
        return res.json();
      })
      .then(userLogout => {
        this.setState({
          bodypart: bodypart
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <div>
          <Navbar value={this.state.isLoggedIn} />
        </div>
        <div>
        <Link className="px-4" to="/"><img src="/images/Med-Self_Logo.jpg" alt="Med-Self" className="logo" /></Link>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/aboutus">
          <Aboutus/>
        </Route>
        <Route path="/createprofile">
          {this.state.profileRedirect === 'bodyparts'
            ? <Redirect to='/bodyparts' />
            : this.state.profileRedirect === 'home'
              ? <Redirect to='/' />
              : <Createprofile createProfile={this.createProfile} />}
        </Route>
        <Route path="/login">
          {this.state.signInRedirect === 'bodyparts'
            ? <Redirect to='/bodyparts' />
            : this.state.signInRedirect === 'home'
              ? <Redirect to='/' />
              : <Login login={this.login} />}
        </Route>
        <Route path="/bodyparts">
          <Bodyparts />
        </Route>
        <Route path="/headneck">
          <Headneck />
        </Route>
        <Route path="/chest">
          <Chest />
        </Route>
        <Route path="/abdomen">
          <Abdomen />
        </Route>
        <Route path="/legsfeet">
          <Legsfeet />
        </Route>
        <Route path="/shouldersarmshands">
          <ShouldersArmsHands />
        </Route>
        <Route path="/headneckdiagnosis/:diagnosisId/:symptomId">
          <HeadNeckDiagnosis />
        </Route>
        <Route path="/shouldersarmshandsdiagnosis/:diagnosisId/:symptomId">
          <ShouldersArmsHandsDiagnosis />
        </Route>
        <Route path="/chestdiagnosis/:diagnosisId/:symptomId">
          <ChestDiagnosis />
        </Route>
        <Route path="/abdomendiagnosis/:diagnosisId/:symptomId">
          <AbdomenDiagnosis />
        </Route>
        <Route path="/legsfeetdiagnosis/:diagnosisId/:symptomId">
          <LegsFeetDiagnosis />
        </Route>
          <Route path="/headnecktreatments/:diagnosisId">
          <HeadNeckTreatments />
        </Route>
        <Route path="/shouldersarmshandstreatments/:diagnosisId">
          <ShouldersArmsHandsTreatments />
        </Route>
        <Route path="/chesttreatments/:diagnosisId">
          <ChestTreatments />
        </Route>
        <Route path="/abdomentreatments/:diagnosisId">
          <AbdomenTreatments />
        </Route>
        <Route path="/legsfeettreatments/:diagnosisId">
          <LegsFeetTreatments />
        </Route>
        <Route path="/logout">
          <Logout logout={this.logout}/>
        </Route>
      </div>
    </>
    );
  }
}
