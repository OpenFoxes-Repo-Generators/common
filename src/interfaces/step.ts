import { Phase } from "./phase";

/**
 * Implementation of a phase.
 *
 * @see Phase
 */
export interface Step {
  phase: Phase;
  runner: () => boolean;
}
