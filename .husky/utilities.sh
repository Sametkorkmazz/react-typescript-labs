#!/usr/bin/env bash

# Shared helpers for husky hooks

is_ci() {
  [ -n "${CI:-}" ]
}

skip_hook() {
  echo "⏭️  Skipping hook: ${1:-no reason given}"
  exit 0
}

print_header() {
  echo ""
  echo "🔧 $1"
}

print_info() {
  echo "ℹ️  $1"
}

print_success() {
  echo "✅ $1"
}

start_timer() {
  HOOK_START_TIME=$(date +%s)
}

end_timer() {
  local end elapsed
  end=$(date +%s)
  elapsed=$((end - ${HOOK_START_TIME:-$end}))
  echo "⏱️  ${1:-Hook} took ${elapsed}s"
}

exit_with_error() {
  echo "❌ $1" >&2
  [ -n "${2:-}" ] && echo "   $2" >&2
  exit 1
}
