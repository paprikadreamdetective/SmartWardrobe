import React, {Component} from "react";
import firebase from 'firebase/compat/app';

class FileUpload extends Component{
    constructor () {
        super();
        this.state = {
            uploadValue: 0
        };
    }

    render () {
        return(
            <div>
                <progress value={this.state.uploadValue}></progress>
            </div>
        )
    }
}

export default FileUpload;