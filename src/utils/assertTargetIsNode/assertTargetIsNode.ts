// An assertion function specfies, in it signature, the type predicate to evalute.

function isString(value: unknown): asserts value is string {
    if (typeof value !== "string") throw new Error("Not a string")
  }

  // Global MouseEvent defines target as EventTarget, not as Node ... so we make sure its a Node ... before I go on
 export function assertIsNode(e: EventTarget | null): asserts e is Node {
    if (!e || !("nodeType" in e)) {
        throw new Error(`Node expected`);
    }
}