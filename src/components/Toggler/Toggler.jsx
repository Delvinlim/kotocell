import React, { useState, useEffect } from 'react'
import { func, string } from 'prop-types';
import { Input, Label, Slider, ToggleContainer, ToggleContainerWrapper } from './../Toggler/Toggler.element';

const Toggle = ({theme,  toggleTheme }) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        localTheme === 'dark' ? setIsChecked(true) : setIsChecked(false) 
    }, [toggleTheme]);
    
    return (
        <>
            <ToggleContainer>
                <ToggleContainerWrapper>
                    <Label>
                        <Input type={"checkbox"} checked={isChecked} onChange={() => setIsChecked(!isChecked)} theme={theme} onClick={toggleTheme} />
                        <Slider />
                    </Label>
                </ToggleContainerWrapper>
            </ToggleContainer>
        </>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
