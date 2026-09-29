import { withBasePath } from "@/lib/paths";
import type { Identity } from "@/types";

export const identity: Identity = {
  name: {
    first: "Niloy",
    middle: "Chandra",
    last: "Datta",
    full: "Niloy Chandra Datta",
  },

  // Components split on " • " and show the first segment as a short title.
  headline:
    "CSE Student • Java/Spring Boot Backend Engineer",
  summary:
    "Computer Science and Engineering student and Java/Spring Boot backend engineer. Currently exploring distributed systems and AI/ML systems.",

  about: [
    "I'm a Computer Science and Engineering student focused on Java and Spring Boot backend engineering, with hands-on experience building web and mobile applications, REST APIs, and database-backed products.",
    "My current work explores distributed systems and production-style software engineering, and I plan to pursue research focused on AI/ML systems.",
  ],

  email: "niloy.datta.dev@gmail.com",

  social: {
    github: "https://github.com/niloy-datta",
    linkedin: "https://www.linkedin.com/in/niloy-d-9897473a8/",
    email: "mailto:niloy.datta.dev@gmail.com",
  },

  education: {
    degree: "BSc in Computer Science and Engineering",
    status: "current-student",
  },

  availableForWork: true,

  profilePicture: withBasePath("/niloy-profile.png"),

  // Set to a file under public/ once a real CV exists; /cv shows an "unavailable" page until then.
  cv: null,
};
