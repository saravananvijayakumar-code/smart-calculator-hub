import client from "~backend/client";

export function useBackend() {
  return client;
}

export function useAuthenticatedBackend() {
  return client;
}
