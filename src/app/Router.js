import React, { lazy } from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { NotificationProvider, Notification } from "./helper/notifications"
import { Suspense } from "react";

const Home = lazy(() => import("./pages/Home"))
const Operation = lazy(() => import("./pages/Operation"))

const Router = () => {

    return (
        <>
            <NotificationProvider>
                {/* <Notification /> */}

                <Switch>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Redirect exact from='/' to='/home' />
                        <Route path="/home" component={Home} />
                        <Route path="/operations" component={Operation} />
                        <Route path="/about" component="About">About</Route>
                        <Route path="/contact" component="Contact">Contact</Route>
                    </Suspense>
                </Switch>
            </NotificationProvider>
        </>
    )
}

export default Router
