/**
 * Pure navigation and state helpers for the WHY ME Difference Engine.
 */

export function resolveActiveDimension(dimensions, activeId) {
  if (!Array.isArray(dimensions) || dimensions.length === 0) {
    return null;
  }
  return dimensions.find((item) => item.id === activeId) || dimensions[0];
}

export function stepDimensionId(dimensions, currentId, direction = 1) {
  if (!Array.isArray(dimensions) || dimensions.length === 0) {
    return null;
  }
  const currentIndex = dimensions.findIndex((item) => item.id === currentId);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextIndex =
    (safeIndex + direction + dimensions.length) % dimensions.length;
  return dimensions[nextIndex].id;
}
