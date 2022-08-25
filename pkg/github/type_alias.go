package github

import (
	"net/http"

	"github.com/google/go-github/v45/github"
)

type (
	CommitFile                         = github.CommitFile
	CreateWorkflowDispatchEventRequest = github.CreateWorkflowDispatchEventRequest
	Deployment                         = github.Deployment
	Installation                       = github.Installation
	IssueCommentEvent                  = github.IssueCommentEvent
	ListOptions                        = github.ListOptions
	PullRequest                        = github.PullRequest
	PullRequestTargetEvent             = github.PullRequestTargetEvent
	PullRequestEvent                   = github.PullRequestEvent
	PushEvent                          = github.PushEvent
	ReleaseEvent                       = github.ReleaseEvent
	Repository                         = github.Repository
	Response                           = github.Response
	StatusEvent                        = github.StatusEvent
	V3Client                           = github.Client
)

func ValidateSignature(signature string, payload, secretToken []byte) error {
	return github.ValidateSignature(signature, payload, secretToken)
}

func ParseWebHook(messageType string, payload []byte) (interface{}, error) {
	return github.ParseWebHook(messageType, payload)
}

func NewV3Client(client *http.Client) *V3Client {
	return github.NewClient(client)
}
