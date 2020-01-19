import * as core from '@actions/core';
import * as exec from '@actions/exec';
import {Inputs} from './interfaces';
import {getInputs} from './get-inputs';
import {setTokens} from './set-tokens';
import * as git from './git-utils';

export async function run(): Promise<number> {
  try {
    const inps: Inputs = getInputs();

    const remoteURL = await setTokens(inps);
    core.info(`remoteURL: ${remoteURL}`); // TODO: remove

    await git.setRepo(inps, remoteURL);

    await git.setConfig(inps);

    exec.exec('git', ['remote', 'add', 'origin', `${remoteURL}`]);
    exec.exec('git', ['add', '--all']);

    await git.commit();
    await git.push(inps.PublishBranch);

    core.info('successfully deployed');

    return 0;
  } catch (e) {
    core.setFailed(`Action failed with error ${e}`);
    return e;
  }
}
