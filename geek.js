import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';

export default function App() {

    const [isChecked, setIsChecked] = React.useState(false);

    return (
        <div style={{ display: 'block', padding: 30 }}>
            <h4>How to use Collapse Component in ReactJS?</h4>
            <FormControlLabel
                control={<Switch checked={isChecked} onChange={() => {
                    setIsChecked((prev) => !prev);
                }} />}
                label="Toggle me to see Collapse Effect"
            />
            <div style={{ display: 'flex' }}>
                <Collapse in={isChecked}>
                    <Paper
                        elevation={5}
                        style={{ margin: 5 }} >
                        <svg style={{ width: 100, height: 100 }}>
                            <polygon points="0,80 45,00, 80,70"
                                style={{
                                    fill: 'orange',
                                    stroke: 'dimgrey',
                                    strokeWidth: 1,
                                }} />
                        </svg>
                    </Paper>
                </Collapse>
            </div>
        </div>
    );
}