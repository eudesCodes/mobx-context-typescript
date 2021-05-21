/* eslint-disable no-undef */
import * as React from 'react';
import { useStore } from 'src/@mobx/context';
import { observer } from 'mobx-react';

// eslint-disable-next-line react/display-name
export default observer((): JSX.Element => {
    // get store value
    const {
        giiher: { state, GPromise },
    } = useStore();

    // useEffect Hook
    React.useEffect(() => {
        GPromise();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>{state}</>;
});
