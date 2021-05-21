import { makeAutoObservable, runInAction } from 'mobx';

class GiiherStore {
    constructor() {
        makeAutoObservable(this);
    }
    /**
     * @constant
     */
    state: string = 'pending'; // "pending", "done"

    /**
     * @method GPromise
     */
    GPromise = async () => {
        this.state = 'pending';
        await new Promise((resolve) => setTimeout(resolve, 4000));
        runInAction(() => {
            this.state = 'done';
        });
    };
}

// export stores
export { GiiherStore };
