interface Region {
  x: number;
  y: number;
  width: number;
  height: number;
}

function isTargetCovered(target: Region, regions: Region[]) {

  // Create a set to keep track of uncovered points within the target region
  const uncoveredPoints = new Set();
  for (let x = target.x; x < target.x + target.width; x++) {
    for (let y = target.y; y < target.y + target.height; y++) {
      uncoveredPoints.add(`${x},${y}`); // Add each point as a string key
    }
  }

  // Iterate through each region and remove covered points
  for (const region of regions) {

    // Check if the region intersects the target region
    if (
      region.x < target.x + target.width &&
      region.x + region.width > target.x &&
      region.y < target.y + target.height &&
      region.y + region.height > target.y
    ) {
      // Remove covered points from the uncoveredPoints set
      for (let x = region.x; x < region.x + region.width; x++) {
        for (let y = region.y; y < region.y + region.height; y++) {
          uncoveredPoints.delete(`${x},${y}`);
        }
      }
    }
  }

  // If there are no uncovered points left, the target is covered
  return uncoveredPoints.size === 0;
}
