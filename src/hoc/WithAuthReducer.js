import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const WithAuthNavigate = (Component) => {

    class NavigateComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>

            return <Component {...this.props}/>
        }
    }

    let mapStateToPropsForNavigate = (state) => ({
        isAuth: state.auth.isAuth,
      });

    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent);

    return ConnectedAuthNavigateComponent;
}