import React from "react";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import { connect } from "react-redux";
// import {Home,Register} from "../Pages"
import {ROUTES} from '../Constants';
import LayoutWrapper from "./LayoutWrapper";
import { routes } from "../../../server";

const NoAuthRoute = ({...props})=>{
    return (
        <LayoutWrapper>
            <Route {...props}/>
        </LayoutWrapper>
    );
}

class Routers extends React.PureComponent {
    render(){
        const {user} = this.props;
        const repeatedProps = {
            admin,
            exact:true,
            forAdminOnly:false
        };
        return (
            <Router>
                <div>
                    <Switch>
                        <NoAuthRoute
                        path = {ROUTES.REGISTER}
                        component = {Register}
                        {...repeatedProps}
                        />
                    </Switch>
                </div>
            </Router>
        )
    }
};

const mapStateToProps = ({admin})=>({
    admin,
})
const actions = {}
export default connect(mapStateToProps,actions)(Routers)