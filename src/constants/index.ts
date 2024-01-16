import { FetchStates } from "./types";


export const BASE_URL = "http://localhost:3000";

export const FETCH_STATES: FetchStates = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  FETCHED: "FETCHED",
  ERROR: "ERROR",
  TIMEOUT: "TIMEOUT",
  POSTING: "POSTING",
  PAGINATING: "PAGINATING",
  REFETCHING: "REFETCHING",
};

export const ANCHORS = {
  HOME: "home",
  SERVICES: "services",
  PROJECTS: "projects",
  TESTIMONIALS: "testimonials",
  CONTACT: "contact",
}

