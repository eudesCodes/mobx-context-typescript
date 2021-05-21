/* eslint-disable no-undef */
import { join } from 'path';
import * as fs from 'fs';
import pMAp from 'p-map';
//

// declare global variables
const ROOT_DIRECTORY: string = process.cwd();
const NODE_MODULE_DIREDCTORY: string = join(ROOT_DIRECTORY, 'node_modules');
const ROOT_PACKAGE_JSON_PATH: string = join(ROOT_DIRECTORY, 'package.json');
const ACKNOWLEDGMENTS_PATH: string = join(ROOT_DIRECTORY, 'ACKNOWLEDGMENTS.md');

// verif if liences file exist

const verifIfLicenseFileExist = (path: string): boolean => {
    return /^licen[s|c]e/i.test(path);
};

// created a ACKNOWLEDGMENTS.md file in root directory

const createdACKNOWLEDGMENTS = async (dependencie: string): Promise<string> => {
    /**
     * @description : the body of ACKNOWLEDGMENTS.md file
     */
    let licenseContent: string = '';
    const DEPENDENCIE_PATH: string = join(NODE_MODULE_DIREDCTORY, dependencie);
    // @constant
    const findLicenseFile = (await fs.promises.readdir(DEPENDENCIE_PATH)).find(
        verifIfLicenseFileExist,
    );

    //
    if (findLicenseFile) {
        licenseContent = (
            await fs.promises.readFile(join(DEPENDENCIE_PATH, findLicenseFile), {
                encoding: 'utf8',
            })
        ).trim();
    } else {
        const { license } = JSON.parse(
            await fs.promises.readFile(join(DEPENDENCIE_PATH, 'package.json'), {
                encoding: 'utf8',
            }),
        );
        if (license) licenseContent = `LiCENSE ${license}`;
    }

    return [`## ${dependencie}`, ``, licenseContent].join('\n');
};

(async () => {
    // get all package.json dependencies

    const { dependencies = {} } = require(ROOT_PACKAGE_JSON_PATH);

    const MAP_CONTENT = (await pMAp([...Object.keys(dependencies)], createdACKNOWLEDGMENTS)).join(
        '\n',
    );

    const OUT_PUT_CONTENT = [``, MAP_CONTENT].join('\n');

    await fs.promises.writeFile(ACKNOWLEDGMENTS_PATH, OUT_PUT_CONTENT, { encoding: 'utf-8' });
})();
