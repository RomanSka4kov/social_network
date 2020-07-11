import React, { Suspense } from 'react';
import Preloader from '../components/common/Preloader/Preloader';


export const withSuspense = (Component) => {
    return () => {
        return(
            <Suspense fallback={<Preloader />}>
                <Component /> 
            </Suspense>
        );
    }
}
