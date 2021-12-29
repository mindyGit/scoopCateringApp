import React from "react";
import { Container, Form, FormControl, Nav, Button, NavDropdown, Image } from "react-bootstrap"

export function UnderFooter() {
    return (
        <footer style={{ backgroundColor: '#403F3F' }}>
            <div class="row pt-4 pb-4 align-items-center whiteColor">
                <div class="col-md-1"></div>
                <div class="col-md-3 h6 mb-0 text-start">תקנון האתר</div>
                <div class="col-md-4 h6 mb-0"> כל הזכויות שמורות לסקופ קייטרינג - scoop</div>
                <div class="col-md-3 h6 mb-0 text-end" style={{ color: "#C59950" }}>ui | ux</div>

                <div class="col-md-1"></div>


            </div>

        </footer>



    )
}
export default UnderFooter