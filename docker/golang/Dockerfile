FROM golang:alpine as builder

ARG USER_ID
ARG GROUP_ID

ENV GOBIN $GOPATH/bin
# Install git.
# Git is required for fetching the dependencies.
# Ca-certificates is required to call HTTPS endpoints.
RUN apk update && apk add --no-cache git ca-certificates tzdata && update-ca-certificates

# Create appuser.
RUN adduser -D -g '' apiuser

# Copy files
ENV PROJECT_DIR github.com/${GITHUB_USERNAME}/${GITHUB_PROJECT_NAME}
ADD cmd /go/src/${PROJECT_DIR}/cmd
ADD service /go/src/${PROJECT_DIR}/service
ADD shared /go/src/${PROJECT_DIR}/shared


ADD go.mod /go/src/${PROJECT_DIR}/
ADD go.sum /go/src/${PROJECT_DIR}/

WORKDIR /go/src/${PROJECT_DIR}/cmd
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s"  -a -installsuffix cgo -o /go/bin/cmd

############################
# STEP 2 build a small image
############################
FROM scratch


# Import the user and group files from the builder.
COPY --from=builder /etc/passwd /etc/passwd

# Copy our static executable and all the needed files.
WORKDIR /go/bin
COPY --from=builder /go/bin/cmd .
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Use an unprivileged user.
USER apiuser

# Run the binary.
CMD [ "/go/bin/cmd" ]

#ENTRYPOINT
EXPOSE 8000
