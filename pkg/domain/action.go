package domain

import (
	"context"

	"github.com/suzuki-shunsuke/gha-dispatcher/pkg/github"
)

type ActionsService interface {
	CreateWorkflowDispatchEventByFileName(ctx context.Context, owner, repo, workflowFileName string, event github.CreateWorkflowDispatchEventRequest) (*github.Response, error)
}

type GitHub interface {
	GetPR(ctx context.Context, owner, repo string, number int) (*github.PullRequest, *github.Response, error)
	ListPRFiles(ctx context.Context, param *github.ParamsListPRFiles) ([]*github.CommitFile, *github.Response, error)
	RunWorkflow(ctx context.Context, owner, repo, workflowFileName string, event github.CreateWorkflowDispatchEventRequest) (*github.Response, error)
	RerunJob(ctx context.Context, owner, repo string, jobID int64) (*github.Response, error)
	RerunWorkflow(ctx context.Context, owner, repo string, runID int64) (*github.Response, error)
	RerunFailedJobs(ctx context.Context, owner, repo string, runID int64) (*github.Response, error)
}
