import { Step } from "./step";

/**
 * Abstraction of a component.
 *
 * The generator for setting up and maintaining repositories uses various components with different sub-tasks.
 * For example, there might be a component specifically for Angular projects.
 * Other components can set up projects in Rust or Python.
 * Each component consists of multiple phases that determine the order in which individual tasks are executed.
 * The generator itself defines the ordering of the different components within each phase.
 * It is also possible to run individual phases in isolation.
 * This allows the components to be linked together in a flexible way.
 */
export interface Component {
  name: string;
  generator: ReadonlyArray<Step>;
  migrator: ReadonlyArray<Step>;
}
