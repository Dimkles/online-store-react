import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import MyInput from '../../components/UI/MyInput/MyInput';

const Home = () => {
    const [value, setValue] = useState('')
    return (
        <Container>
            <div>
                <MyInput value={value} setValue={setValue} placeholder='введите email' name='email' type='email' />
            </div>
        </Container>

    );
};

export default Home;