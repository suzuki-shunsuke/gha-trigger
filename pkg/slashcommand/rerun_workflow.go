package slashcommand

import (
	"context"
	"net/http"
	"strings"

	"github.com/gha-trigger/gha-trigger/pkg/domain"
	"github.com/gha-trigger/gha-trigger/pkg/github"
	"github.com/gha-trigger/gha-trigger/pkg/util"
	"go.uber.org/zap"
)

func rerunWorkflows(ctx context.Context, logger *zap.Logger, gh *github.Client, owner, repo, cmtBody string) (*domain.Response, error) {
	// /rerun-workflow <workflow id> [<workflow id> ...]
	words := strings.Split(strings.TrimSpace(cmtBody), " ")
	if len(words) < 2 { //nolint:gomnd
		return &domain.Response{
			StatusCode: http.StatusBadRequest,
			Body: map[string]interface{}{
				"error": "signature is invalid",
			},
		}, nil
	}
	var gErr error
	resp := &domain.Response{
		StatusCode: http.StatusOK,
		Body: map[string]interface{}{
			"message": "workflows are rerun",
		},
	}
	for _, workflowRunID := range words[1:] {
		// TODO validation
		runID, err := util.ParseInt64(workflowRunID)
		if err != nil {
			logger.Warn("parse a workflow run id as int64", zap.Error(err))
			if resp.StatusCode == http.StatusOK {
				resp.StatusCode = http.StatusBadRequest
			}
			continue
		}
		logger := logger.With(zap.Int64("workflow_run_id", runID))
		logger.Info("rerunning a workflow")
		if res, err := gh.RerunWorkflow(ctx, owner, repo, runID); err != nil {
			logger.Error("rerun a workflow", zap.Error(err), zap.Int("status_code", res.StatusCode))
			resp = &domain.Response{
				StatusCode: http.StatusInternalServerError,
				Body: map[string]interface{}{
					"message": "failed to rerun a workflow",
				},
			}
			continue
		}
	}
	return resp, gErr
}