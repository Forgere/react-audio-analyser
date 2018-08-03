/**
 * Created by j_bleach on 2018/8/1.
 */
import React, {Component} from 'react';
import MediaRecorder from './MediaRecorder';

@MediaRecorder
class AudioAnalyser extends Component {
    componentDidMount() {
        this.startAudio();
    }

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            const event = {
                inactive: this.stopAudio,
                recording: this.startAudio,
                paused: this.pauseAudio,
            }[this.props.status];
            event && event();
        }
    }

    render() {
        const {children} = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default AudioAnalyser;