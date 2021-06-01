import React from 'react';

import { Provider } from './provider';
// import { ToastProvider } from './toast'


const AppProvider: React.FC = ({ children }) => {

    return (
        <Provider>
            {/* <ToastProvider> */}
                {children}
            {/* </ToastProvider> */}
        </Provider>

    );
};

export default AppProvider;