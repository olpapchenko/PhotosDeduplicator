import Container from '@material-ui/core/Container';
import React, { Component } from "react";
import MainGallery from "./gallery.js";
import ApplicationBar from "./appBar.js";
import '../../styles/App.css';

class MainView extends Component {
    render() {
        return <div>
            <ApplicationBar/>
            <Container>
                <MainGallery/>
             </Container>
         </div>
    }
}

export default MainView