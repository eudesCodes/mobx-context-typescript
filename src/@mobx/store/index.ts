/*
 Copyright (c) 2020 - 2021 https://eudes.codes/
 @author: Eudes Evrard BOBBOH - EBO
 @country: France
 @email: evrard@eudes.codes
 @website: https://eudes.codes/

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/

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
