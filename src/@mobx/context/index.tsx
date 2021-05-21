/* eslint-disable no-undef */
import * as React from 'react';

import { TStore, TSoreProvider } from 'src/@mobx/models';
import { Store } from 'src/@mobx';

// Create a Store context
const StoreContext: React.Context<TStore> = React.createContext<TStore>(Store);

// Create a Store provider

const StoreProvider: React.FC<TSoreProvider> = ({
    store,
    children,
}: TSoreProvider): JSX.Element => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

// use the store context

const useStore = () => {
    return React.useContext(StoreContext);
};

// export provider and useStore

export { StoreProvider, useStore };
