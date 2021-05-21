import * as React from 'react';
import { GiiherStore } from 'src/@mobx/store';

// Type Store

type TStore = {
    giiher: GiiherStore;
};

// Provider store type

// Provider store type
type TSoreProvider = React.PropsWithChildren<{
    store: TStore;
}>;

export type { TStore, TSoreProvider }; // export Store Type
