import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "./../../Redux/ProfileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { WithAuthNavigate } from "../../hoc/WithAuthReducer";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
)(ProfileContainer);
