import * as React from 'react';

// Type Store

type TStore = {
    store: 'store goes here';
};

// Provider store type

// Provider store type
type TSoreProvider = React.PropsWithChildren<{
    store: TStore;
}>;

export type { TStore, TSoreProvider }; // export Store Type
