import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getUserData } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getUserData })(HeaderContainer);
