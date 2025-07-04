/**
 * Defines a phase in the execution of the generator.
 *
 * A phase describes a segment of the generator's execution.
 * It can be intended for regenerating or migrating existing content.
 */
export interface Phase {
  name: string;
  description: string;
}
