import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Toggle() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            sx={{ padding: "1% 30% 1% 30%"}}
        >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="apprel">APPREL</ToggleButton>
            <ToggleButton value="electronic">ELECTRONICS</ToggleButton>
            <ToggleButton value="personalCare">PERSONAL CARE</ToggleButton>
        </ToggleButtonGroup>
    );
}
