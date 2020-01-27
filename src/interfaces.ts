export interface Inputs {
  readonly DeployKey: string;
  readonly GithubToken: string;
  readonly PersonalToken: string;
  readonly PublishBranch: string;
  readonly PublishDir: string;
  readonly ExternalRepository: string;
  readonly AllowEmptyCommit: boolean;
  readonly KeepFiles: boolean;
  readonly ForceOrphan: boolean;
  readonly UserName: string;
  readonly UserEmail: string;
  readonly CommitMessage: string;
  readonly TagName: string;
  readonly TagMessage: string;
  readonly TagOverwrite: boolean;
}

export interface CmdResult {
  readonly exitcode: number;
  output: string;
}
