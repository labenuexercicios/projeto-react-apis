import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-poppins',
});

function Title({ text }) {
    return (
        <h1
            className={`text-5xl text-white ${poppins.variable} font-sans mb-32`}
        >
            {text}
        </h1>
    );
}

export default Title;
